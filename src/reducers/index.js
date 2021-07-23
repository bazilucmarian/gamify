import {addNewChallenge, deleteChallenge, editChallenge} from '../services/services';

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
