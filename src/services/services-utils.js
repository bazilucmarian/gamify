import {updateChallengeStatus} from './services';

export const updateState = (challenges, challengeId, newStatus, operation) => {
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

export const changeStatusRequest = async (allChallenges, challengeId, newStatus, userId, operation) => {
  const status = await updateChallengeStatus(challengeId, userId, newStatus);
  if (status.includes('Success')) {
    return updateState(allChallenges, challengeId, newStatus, operation);
  }

  return [];
};
