import '../mocks/fake-mocks';

/* Authentication */

export const getUserService = async role => {
  let data;
  try {
    const statusResponse = await fetch(`/user/${role}`);
    data = await statusResponse.json();
  } catch (error) {
    console.error(error.message);
  }
  console.log('user- from service', data);
  return data;
};

export const getUserServiceById = async userId => {
  try {
    const statusResponse = await fetch(`/user-data/${userId}`);
    return await statusResponse.json();
  } catch (error) {
    return error.message;
  }
};

/* USER PAGES SERVICES */

export const getAvailableChallenges = async (userId, status) => {
  let data;
  try {
    const statusResponse = await fetch(`/user-challenges/${userId}/${status}`);
    data = await statusResponse.json();
  } catch (error) {
    console.error(error.message);
  }
  return data;
};

export const getInProgressOrCompletedChallenges = async userId => {
  try {
    const userChallengesResponse = await fetch(`/user-challenges/${userId}`);
    return await userChallengesResponse.json();
  } catch (error) {
    return error.message;
  }
};

export const updateChallengeStatus = async (challengeId, userId, newStatus) => {
  try {
    const response = await fetch('/user-challenges', {
      method: 'PUT',
      body: {challengeId, userId, status: newStatus}
    });

    const messageResponse = await response.json();
    const {message} = messageResponse;
    return message;
  } catch (error) {
    return error.message;
  }
};

/* ADMIN PAGES SERVICES */

export const getAllChallenges = async () => {
  try {
    const allChallenges = await fetch('/challenges');
    return await allChallenges.json();
  } catch (error) {
    return error.message;
  }
};

export const getAllUsersChallengesByStatus = async status => {
  try {
    const challengesResponse = await fetch(`/challenges/${status}`);

    return await challengesResponse.json();
  } catch (error) {
    return error.message;
  }
};

export const deleteChallenge = async challengeId => {
  try {
    const response = await fetch(`/challenges/${challengeId}`, {
      method: 'DELETE',
      body: {challengeId}
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const addNewChallenge = async challenge => {
  try {
    const response = await fetch('/challenges', {
      method: 'POST',
      body: challenge
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const editChallenge = async (challengeFields, challengeId) => {
  try {
    const response = await fetch(`/challenges/${challengeId}`, {
      method: 'PUT',
      body: challengeFields
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

/* Shop services */

export const getSingleShopItem = async id => {
  try {
    const response = await fetch(`/shop/${id}`);
    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const getAllShopItems = async () => {
  try {
    const allShopItems = await fetch('/shop');
    return await allShopItems.json();
  } catch (error) {
    return error.message;
  }
};

// shop
export const deleteShopItem = async shopItemId => {
  try {
    const response = await fetch(`/shop/${shopItemId}`, {
      method: 'DELETE',
      body: {shopItemId}
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const addNewShopItem = async shopItem => {
  try {
    const response = await fetch('/shop', {
      method: 'POST',
      body: shopItem
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const editShopItem = async shopItem => {
  try {
    const response = await fetch(`/shop/${shopItem.id}`, {
      method: 'PUT',
      body: shopItem
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

// requests for getting items from shopping list or add new one

export const addItemToShoppingList = async (userId, shopItem) => {
  try {
    const response = await fetch(`/shop/cart/${userId}`, {
      method: 'POST',
      body: shopItem
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const getItemsAddedToShoppingList = async userId => {
  try {
    const response = await fetch(`/shop/cart/${userId}`, {
      method: 'GET'
    });

    return await response.json();
  } catch (error) {
    return error.message;
  }
};
