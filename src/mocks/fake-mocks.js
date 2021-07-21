/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import fetchMock from 'fetch-mock';

import {
  deleteChallenge,
  filterChallenges,
  getAllChallengesList,
  getChallengesByStatus,
  getNewChallenges,
  getNewUpdatedChallenge,
  updateUserChallenges
} from './helpers';

/* GET CHALLENGES DEPENDING ON STATUS */
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
        body: getNewChallenges(challenge)
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
