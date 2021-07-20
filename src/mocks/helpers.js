import {challengesList, statusDictionary, userChallengesData} from './fixtures';

const getStatus = (challenges, id) => {
  const {status} = challenges.find(({challengeId}) => challengeId === id) || {};
  return status;
};

const filterByStatus = (challenges, statuses) => challenges.filter(({status}) => statuses.includes(status));

export const filterChallenges = (usrId, sts) => {
  const {challenges: userChallenges} = userChallengesData.find(({userId}) => userId === usrId) || {};
  const userChallengesIds = userChallenges?.map(({challengeId}) => challengeId);

  if (sts === statusDictionary.available) {
    // Returns available user challenges
    return challengesList.filter(({id}) => !userChallengesIds.includes(id));
  }
  if (sts === statusDictionary.all) {
    // Returns all the challenges (admin page)
    return challengesList;
  }

  // Returns inProgress/denied/pending/validated challenges
  const filteredChallengesWithStatus = challengesList
    .map(challenge =>
      userChallengesIds.includes(challenge.id) ? {...challenge, status: getStatus(userChallenges, challenge.id)} : null
    )
    .filter(Boolean);

  const inProgressChallenges = filterByStatus(filteredChallengesWithStatus, [
    statusDictionary.inProgress,
    statusDictionary.inPending
  ]);

  const completedChallenges = filterByStatus(filteredChallengesWithStatus, [
    statusDictionary.validated,
    statusDictionary.denied
  ]);

  return {
    inProgressChallenges,
    completedChallenges
  };
};
