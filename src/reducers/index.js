import {
  addItemToShoppingList,
  addNewChallenge,
  addNewShopItem,
  deleteChallenge,
  deleteShopItem,
  editChallenge,
  editShopItem
} from '../services/services';

// if the status changes from inProgress to inPending, the card will persist, otherwise will be deleted
export const updateStateForUserChallenges = (challenges, challengeId, newStatus, operation) => {
  switch (operation) {
    case 'DELETE':
      return challenges.filter(({id}) => id !== challengeId);

    case 'UPDATE':
      return challenges.map(challenge =>
        challenge.id === challengeId ? {...challenge, status: newStatus} : challenge
      );

    default:
      return [];
  }
};

export const updateStateForAdminChallenges = async (allChallenges, challengeId, challengeObject, operation) => {
  switch (operation) {
    case 'DELETE':
      {
        const {message} = await deleteChallenge(challengeId);
        if (message.includes('Success')) {
          return allChallenges.filter(challenge => challenge.id !== challengeId);
        }
      }
      break;

    case 'EDIT': {
      const updatedChallenge = await editChallenge(challengeObject, challengeId);
      return allChallenges.map(challenge => (challenge.id === updatedChallenge.id ? updatedChallenge : challenge));
    }

    case 'CREATE': {
      const newChallenge = await addNewChallenge({...challengeObject, id: Date.now()});
      return [newChallenge, ...allChallenges];
    }

    default:
      break;
  }
  return [];
};

// shop admin

export const updateStateShopAdmin = async (allShopItems, shopItem, operation) => {
  switch (operation) {
    case 'DELETE':
      {
        const {message} = await deleteShopItem(shopItem.id);
        if (message.includes('Success')) {
          return allShopItems.filter(item => item.id !== shopItem.id);
        }
      }

      break;

    case 'EDIT': {
      const updatedShopItem = await editShopItem(shopItem);
      return allShopItems.map(item => (item.id === updatedShopItem.id ? updatedShopItem : item));
    }

    case 'CREATE': {
      const newShopItem = await addNewShopItem({...shopItem, id: Date.now()});
      return [newShopItem, ...allShopItems];
    }

    default:
      break;
  }

  return [];
};

// state for purchased products
export const updateStatePurchasedShopItems = async (shopItem, loggedInUserId, operation) => {
  switch (operation) {
    case 'ADD_TO_SHOPPING_LIST': {
      // eslint-disable-next-line no-return-await
      return await addItemToShoppingList(loggedInUserId, shopItem);
    }

    case 'REMOVE_FROM_SHOPPING_LIST': {
      break;
    }

    default:
      break;
  }

  return [];
};
