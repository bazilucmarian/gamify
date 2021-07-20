/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import fetchMock from 'fetch-mock';
import {deleteChallenge, filterChallenges, getAllChallengesList, getChallengesByStatus} from './helpers';

/* CHALLENGES */
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

/* UPDATE CHALLENGE STATUS */

fetchMock.put({
  matcher: url => url === '/user-challenges',

  response: async (_, opts) => {
    const challenge = opts.body;
    if (challenge) {
      return {
        status: 200,
        body: {message: 'Success update! '}
      };
    }
    throw new Error('Problems put mock !!');
  }
});

/* ADMIN : GET ALL CHALLENGES FOR ALL USERS */

fetchMock.mock(
  {url: '/challenges', method: 'GET'},
  {
    status: 200,
    body: getAllChallengesList()
  }
);

fetchMock.get({
  matcher: 'express:/challenges/:status',
  response: url => {
    const [, status] = url.split('/').filter(Boolean);

    return {status: 200, body: getChallengesByStatus(status)};
  }
});

fetchMock.delete({
  matcher: 'express:/challenges/:challengeId',
  response: async (_, opts) => {
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
