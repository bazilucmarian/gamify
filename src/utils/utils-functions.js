/* eslint-disable import/no-cycle */
import {userChallengesDummy, users} from './dummy-data';

// to be removed later

const getUser = role => users.find(user => user.role === role);

const getUserLoggedInChallenges = userId => userChallengesDummy.find(user => user.userId === userId);

const filteredChallengesWithStatus = (userChallenges, challengeListFromAdmin, status) => {
  const ids = userChallenges.filter(challenge => challenge.status === status).map(challenge => challenge.challengeId);
  const filteredChallenges = challengeListFromAdmin.filter(challenge => ids.includes(challenge.id));
  return filteredChallenges;
};

const camelCaseToKebabCase = string =>
  string.replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').toLowerCase();

export {getUser, getUserLoggedInChallenges, filteredChallengesWithStatus, camelCaseToKebabCase};
