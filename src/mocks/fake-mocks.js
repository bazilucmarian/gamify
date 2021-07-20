/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import fetchMock from 'fetch-mock';

import {filterChallenges} from './helpers';

/* CHALLENGES */
fetchMock.get({
  matcher: 'express:/user-challenges/:userId/:status?',
  response: url => {
    // eslint-disable-next-line no-unused-vars
    const [_, userId, status] = url.split('/').filter(Boolean);

    return {
      status: 200,
      body: filterChallenges(Number(userId), status)
    };
  }
});
