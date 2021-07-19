/* eslint-disable no-param-reassign */
import {challengesList, statusDictionary, userChallengesData, users} from './fixtures';

const getStatus = (challenges, id) => {
  const [{status}] = challenges.filter(({challengeId}) => challengeId === id);
  return status;
};

const filterByStatus = (challenges, statuses) => challenges.filter(({status}) => statuses.includes(status));

export const filterChallenges = (usrId, sts) => {
  const [{challenges: userChallenges}] = userChallengesData.filter(({userId}) => userId === usrId);
  const userChallengesIds = userChallenges?.filter(({status}) => status !== sts).map(({challengeId}) => challengeId);

  if (sts === statusDictionary.available) {
    // Returns available user challenges

    return challengesList
      .filter(({id}) => !userChallengesIds.includes(id))
      .map(challenge => ({...challenge, status: sts}));
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

// update state functions

export const updateUserChallenges = (userIdParam, challengeId, newStatus) => {
  const [loggedInUserChallenges] = userChallengesData.filter(({userId}) => userId === +userIdParam);

  const singleChallengeIndex = loggedInUserChallenges.challenges.findIndex(
    challenge => challenge.challengeId === challengeId
  );

  if (singleChallengeIndex !== -1) {
    loggedInUserChallenges.challenges[singleChallengeIndex].status = newStatus;
  } else {
    loggedInUserChallenges.challenges.push({challengeId, status: newStatus});
  }
};

export const updateState = (challenges, challengeId, newStatus, userId, operation) => {
  if (operation === 'DELETE') {
    updateUserChallenges(userId, challengeId, newStatus);
    return challenges.filter(({id}) => id !== challengeId);
  }
  if (operation === 'UPDATE') {
    updateUserChallenges(userId, challengeId, newStatus);
    const newChallenges = challenges.map(challenge => {
      if (challenge.id === challengeId) {
        return {...challenge, status: newStatus};
      }
      return challenge;
    });
    return newChallenges;
  }
  return false;
};

// Admin

// filter challenges by status for all users

export const getChallengesByStatus = statusParam =>
  userChallengesData
    .map(user => {
      const [userDetails] = users.filter(person => person.id === user.userId);
      const {id: userId, name: userName, job: jobTitle, image} = userDetails || {};

      const userChallengesIds = user.challenges
        .filter(({status}) => status === statusParam)
        .map(({challengeId}) => challengeId);
      const filteredChallenges = challengesList
        .filter(({id}) => userChallengesIds.includes(id))
        .map(challenge => ({...challenge, status: statusParam, userId, userName, jobTitle, image}));
      return filteredChallenges;
    })
    .flat();

export const getAllChallengesList = () => challengesList;

export const deleteChallenge = challengeId => {
  const singleChallengeIndex = challengesList.findIndex(({id}) => id === challengeId);
  challengesList.splice(singleChallengeIndex, 1);
  return challengesList;
};
