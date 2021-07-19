// eslint-disable-next-line import/no-cycle
// to be removed when the backend will be implemented

import {userChallengesData, users} from '../mocks/fixtures';

const getUser = role => users.find(user => user.role === role);

const getLoggedInUserChallenges = userId => userChallengesData.find(user => user.userId === userId);

const filteredChallengesWithStatus = (userChallenges, challengeListFromAdmin, status) => {
  const ids = userChallenges.filter(challenge => challenge.status === status).map(challenge => challenge.challengeId);
  const filteredChallenges = challengeListFromAdmin.filter(challenge => ids.includes(challenge.id));
  return filteredChallenges;
};

const camelCaseToKebabCase = string =>
  string.replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').toLowerCase();

export {getUser, getLoggedInUserChallenges, filteredChallengesWithStatus, camelCaseToKebabCase};
