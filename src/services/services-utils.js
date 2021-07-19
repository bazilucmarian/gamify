import {updateState} from '../mocks/helpers';
import {updateChallengeStatus} from './services';

export const changeStatusRequest = async (allChallenges, challengeId, newStatus, userId, operation) => {
  const status = await updateChallengeStatus(challengeId, newStatus);
  if (status.includes('Success')) {
    const newUpdatedState = updateState(allChallenges, challengeId, newStatus, userId, operation);
    return newUpdatedState;
  }
  return undefined;
};
