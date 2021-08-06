/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import fetchMock from 'fetch-mock';

import {
  deleteChallenge,
  deleteShopItem,
  filterChallenges,
  getAllChallengesList,
  getAllShopItems,
  getChallengesByStatus,
  getItemsAddedToShoppingList,
  getNewChallengeAdded,
  getNewUpdatedChallenge,
  getNewUpdatedShopItem,
  getShopItemById,
  updateShopItems,
  updateUserChallenges,
  getUser,
  getUserByUserId
} from './helpers';

// get user by role
fetchMock.get({
  matcher: 'express:/user/:role',
  response: url => {
    const [, role] = url.split('/').filter(Boolean);

    console.log('fetch-mock', role);
    console.log('fetch-mock', getUser(role).credits);
    return {
      status: 200,
      body: getUser(role)
    };
  }
});

fetchMock.get({
  matcher: 'express:/user-data/:userId',
  response: url => {
    const [, userId] = url.split('/').filter(Boolean);
    console.log(userId);
    return {status: 400, body: getUserByUserId(userId)};
  }
});

/* GET USER-CHALLENGES DEPENDING ON STATUS */
fetchMock.get({
  matcher: 'express:/user-challenges/:userId/:status?',
  response: url => {
    const [, userId, status] = url.split('/').filter(Boolean);

    return {
      status: 200,
      body: filterChallenges(Number(userId), status)
    };
  }
});

/* UPDATE CHALLENGE STATUS AND RETURN SUCCESS VALUE */

fetchMock.put({
  matcher: url => url === '/user-challenges',

  response: (_, opts) => {
    const challenge = opts.body;
    const {challengeId, userId, status} = challenge;

    updateUserChallenges(userId, challengeId, status);
    return {
      status: 200,
      body: {message: 'Success update! '}
    };
  }
});

/* ADMIN : GET ALL CHALLENGES  (for challengesPage admin) */

fetchMock.mock(
  {url: '/challenges', method: 'GET'},
  {
    status: 200,
    body: getAllChallengesList()
  }
);

/* ADMIN : GET CHALLENGES BY STATUS (ex: challenges in pending for validation page) */

fetchMock.get({
  matcher: 'express:/challenges/:status',
  response: url => {
    const [, status] = url.split('/').filter(Boolean);
    return {status: 200, body: getChallengesByStatus(status)};
  }
});

/* ADMIN : DELETE specific challenge by admin */

fetchMock.delete({
  matcher: 'express:/challenges/:challengeId',
  response: (_, opts) => {
    const {challengeId} = opts.body;

    if (challengeId) {
      return {
        status: 200,
        body: deleteChallenge(challengeId)
      };
    }
    throw new Error('Problems delete mock!!');
  }
});

/* ADMIN : CREATE new challenge by admin */
fetchMock.post({
  matcher: url => url === '/challenges',

  response: (_, opts) => {
    const challenge = opts.body;

    if (challenge) {
      return {
        status: 200,
        body: getNewChallengeAdded(challenge)
      };
    }
    throw new Error('Problems put mock !!');
  }
});

/* ADMIN : EDIT specific challenge by admin */

fetchMock.put({
  matcher: 'express:/challenges/:challengeId',
  response: (url, opts) => {
    const [, challengeId] = url.split('/').filter(Boolean);
    const challenge = opts.body;

    return {
      status: 200,
      body: getNewUpdatedChallenge(challenge, challengeId)
    };
  }
});

/* SHOP */

fetchMock.get({
  matcher: 'express:/shop/:id',
  response: url => {
    const [, id] = url.split('/').filter(Boolean);

    return {status: 200, body: getShopItemById(Number(id))};
  }
});
/* SHOP: GET all shop items   */
fetchMock.mock(
  {url: '/shop', method: 'GET'},
  {
    status: 200,
    body: getAllShopItems()
  }
);

/* SHOP ADMIN */

fetchMock.delete({
  matcher: 'express:/shop/:shopItemId',
  response: (_, opts) => {
    const {shopItemId} = opts.body;

    if (shopItemId) {
      return {
        status: 200,
        body: deleteShopItem(shopItemId)
      };
    }
    throw new Error('Problems delete mock!!');
  }
});

/* ADMIN : EDIT specific shop item by admin */

fetchMock.put({
  matcher: 'express:/shop/:shopItemId',
  response: (url, opts) => {
    const [, shopItemId] = url.split('/').filter(Boolean);

    const shopItem = opts.body;

    return {
      status: 200,
      body: getNewUpdatedShopItem(shopItem, shopItemId)
    };
  }
});

/* USER : add new shop item to shopping list */
fetchMock.post({
  matcher: 'express:/shop/cart/:userId',

  response: (url, opts) => {
    const userId = url.split('/').filter(Boolean)[2];
    const shopItem = opts.body;
    const message = updateShopItems(userId, shopItem.id);

    if (shopItem) {
      return {
        status: 200,
        body: message
      };
    }
    throw new Error('Problems  !!');
  }
});

fetchMock.get({
  matcher: 'express:/shop/cart/:userId',

  response: (url, opts) => {
    const userId = url.split('/').filter(Boolean)[2];

    return {
      status: 200,
      body: getItemsAddedToShoppingList(userId)
    };
  }
});
