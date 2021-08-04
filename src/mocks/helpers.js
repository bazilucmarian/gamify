import {getTotalXpAndCredits, getUserById} from '../utils';

import {challengesList, shopItems, statusDictionary, userChallengesData, users, userShopData} from './fixtures';

const getStatus = (challenges, id) => {
  const {status} = challenges.find(({challengeId}) => challengeId === id) || {};
  return status;
};

const getQuantity = (userShop, id) => {
  const {quantity} = userShop?.shopItems?.find(({shopItemId}) => shopItemId === Number(id)) || {};
  return quantity;
};

const filterByStatus = (challenges, statuses) => challenges.filter(({status}) => statuses.includes(status));

// GET inProgress/denied/pending/validated challenges for user pages
export const filterChallenges = (usrId, sts) => {
  const {challenges: userChallenges} = userChallengesData.find(({userId}) => userId === usrId);
  const userChallengesIds = userChallenges?.filter(({status}) => status !== sts).map(({challengeId}) => challengeId);

  if (sts === statusDictionary.available) {
    // Returns available user challenges

    return challengesList
      .filter(({id}) => !userChallengesIds.includes(id))
      .map(challenge => ({...challenge, status: sts}));
  }

  // Returns inProgress/denied/pending/validated challenges
  const filteredChallengesWithStatus = challengesList
    .map(challenge =>
      userChallengesIds.includes(challenge.id) ? {...challenge, status: getStatus(userChallenges, challenge.id)} : null
    )
    .filter(Boolean);

  const inProgressChallenges = filterByStatus(filteredChallengesWithStatus, [
    statusDictionary.inProgress,
    statusDictionary.inPending
  ]);

  const completedChallenges = filterByStatus(filteredChallengesWithStatus, [
    statusDictionary.validated,
    statusDictionary.denied
  ]);

  // update userXp and credits with challenges validated
  const userLoggedIn = getUserById(usrId);
  const validatedChallenges = filterByStatus(filteredChallengesWithStatus, [statusDictionary.validated]);
  const {xpTotal, creditsTotal} = getTotalXpAndCredits(validatedChallenges, userLoggedIn.xp, userLoggedIn.credits);
  userLoggedIn.xp = xpTotal;
  userLoggedIn.credits = creditsTotal;

  return {
    inProgressChallenges,
    completedChallenges
  };
};

// functionality for PUT request : when you press enroll and that challenge doesn't exist in user's challenges, the push method will be performed
// otherwise, only the status will be updated

export const updateUserChallenges = (userIdParam, challengeId, newStatus) => {
  const loggedInUserChallenges = userChallengesData.find(({userId}) => userId === Number(userIdParam));
  if (!loggedInUserChallenges) {
    return;
  }

  const singleChallengeIndex = loggedInUserChallenges?.challenges.findIndex(
    challenge => challenge.challengeId === challengeId
  );

  if (singleChallengeIndex !== -1) {
    loggedInUserChallenges.challenges[singleChallengeIndex].status = newStatus;
  } else {
    loggedInUserChallenges.challenges.push({challengeId, status: newStatus});
  }
};

/* ADMIN-PAGES :the functions below are for admin pages */

// filter challenges by status for all users - for validation page admin
export const getChallengesByStatus = statusParam =>
  userChallengesData
    .map(user => {
      const userDetails = users.find(person => person.id === user.userId);
      const {id: userId, name: userName, job: jobTitle, image} = userDetails || {};

      const userChallengesIds = new Map(
        user.challenges.map(({status, challengeId}) => status === statusParam && [challengeId, status]).filter(Boolean)
      );

      return challengesList
        .filter(({id}) => userChallengesIds.has(id))
        .map(challenge => ({...challenge, status: statusParam, userId, userName, jobTitle, image}));
    })
    .flat();

//  ADMIN : GET all challenges
export const getAllChallengesList = () => challengesList;

export const deleteChallenge = challengeId => {
  const singleChallengeIndex = challengesList.findIndex(({id}) => id === challengeId);
  challengesList.splice(singleChallengeIndex, 1);
  return {message: 'Success deleted!'};
};

// ADMIN : POST new challenge
export const getNewChallengeAdded = challenge => {
  challengesList.unshift(challenge);
  return challenge;
};

// ADMIN :EDIT a challenge and returns the updated challenge
export const getNewUpdatedChallenge = (newChallengeData, challengeId) => {
  const {title: newTitle, xp: newXp, credits: newCredits, description: newDescription} = newChallengeData;
  const singleChallengeIndex = challengesList.findIndex(({id}) => id === Number(challengeId));

  challengesList[singleChallengeIndex].title = newTitle;
  challengesList[singleChallengeIndex].credits = newCredits;
  challengesList[singleChallengeIndex].xp = newXp;
  challengesList[singleChallengeIndex].description = newDescription;

  return challengesList[singleChallengeIndex];
};

// SHOP

export const getShopItemById = itemId => shopItems.filter(({id}) => id === itemId);
/* SHOP: GET all shop items */
export const getAllShopItems = () => shopItems;

//  ADMIN-SHOP : delete specific shopItem
export const deleteShopItem = shopItemId => {
  const singleShopItemIndex = shopItems.findIndex(({id}) => id === shopItemId);
  shopItems.splice(singleShopItemIndex, 1);
  return {message: 'Success deleted!'};
};

//  ADMIN-SHOP : edit specific shopItem

export const getNewUpdatedShopItem = (shopItem, shopItemId) => {
  const {title: newTitle, credits: newCredits, description: newDescription, images: newImages} = shopItem;
  const singleShopItemIndex = shopItems.findIndex(({id}) => id === Number(shopItemId));
  shopItems[singleShopItemIndex].title = newTitle;
  shopItems[singleShopItemIndex].credits = newCredits;
  shopItems[singleShopItemIndex].description = newDescription;
  shopItems[singleShopItemIndex].images = newImages;

  return shopItems[singleShopItemIndex];
};

// SHOP: USER:  functionality for PUT request for  shopping list  : when you press buy the product id and quantity will be added to the database

export const updateShopItems = (userIdParam, shopItemId) => {
  const loggedInShopItems = userShopData.find(({userId}) => userId === Number(userIdParam));

  const singleShopItemIndex = loggedInShopItems?.shopItems.findIndex(item => item.shopItemId === shopItemId);
  if (singleShopItemIndex !== -1) {
    loggedInShopItems.shopItems[singleShopItemIndex].quantity += 1;
  } else {
    loggedInShopItems.shopItems.push({shopItemId, quantity: 1});
  }
};

// SHOP:USER
export const getItemsAddedToShoppingList = userIdParam => {
  const userShop = userShopData?.find(({userId}) => userId === Number(userIdParam));
  const userShopIds = new Set(userShop?.shopItems?.map(({shopItemId}) => shopItemId));

  return shopItems
    .filter(shopItem => userShopIds.has(shopItem.id))
    .map(shopItem => ({...shopItem, userId: userIdParam, quantity: getQuantity(userShop, shopItem.id)}));
};
