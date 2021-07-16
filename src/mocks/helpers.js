import {userChallengesDummy, challengesList} from './fixtures';

export const filterChallenges = (usrId, sts) => {
  // Get all user's challenges
  const [userChallenges] = userChallengesDummy.filter(({userId}) => userId === usrId);

  // Filter user's challenges by STATUS
  const filteredChallengesByStatus = userChallenges.challenges.filter(({status}) => status === sts);

  // Filter all challenges corresponding to user's challenges (xp,title...etc)
  const userFilteredChallenges = challengesList.filter(({id}) =>
    filteredChallengesByStatus.some(({challengeId}) => challengeId === id)
  );

  // Add the status to the challenges object
  const userChallengesWithStatus = userFilteredChallenges.map(item => ({...item, status: sts}));

  return userChallengesWithStatus;
};
