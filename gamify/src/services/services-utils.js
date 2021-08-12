import {updateStateForUserChallenges} from '../reducers';

import {updateChallengeStatus} from './services';

export const changeStatusRequest = async (allChallenges, challengeId, newStatus, userId, operation) => {
  const status = await updateChallengeStatus(challengeId, userId, newStatus);
  if (status.includes('Success')) {
    return updateStateForUserChallenges(allChallenges, challengeId, newStatus, operation);
  }

  return [];
};
