/* eslint-disable import/no-cycle */
import {userChallengesDummy, users} from './dummy-data';

export const generateUser = role => users.find(user => user.role === role);

export const getUserLoggedInChallenges = userId => userChallengesDummy.find(user => user.userId === userId);

export const filteredChallengesWithStatus = (userChallenges, challengeListFromAdmin, status) => {
  const ids = userChallenges.filter(challenge => challenge.status === status).map(challenge => challenge.challengeId);

  const filteredChallenges = challengeListFromAdmin.filter(challenge => ids.includes(challenge.id));

  console.log(`---${status}---`, filteredChallenges);
  return filteredChallenges;
};

export const camelCaseToKebabCase = string =>
  string.replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').toLowerCase();
