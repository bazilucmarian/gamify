// to be removed when the backend will be implemented

import {userChallengesData, users} from '../mocks/fixtures';

const getUser = role => users.find(user => user.role === role);

const getUserById = id => users.find(user => user.id === id);

const getLoggedInUserChallenges = userId => userChallengesData.find(user => user.userId === userId);

const camelCaseToKebabCase = string =>
  string?.replace(/((?<=[\da-z])[A-Z]|(?<=[\dA-Z])[A-Z](?=[a-z]))/g, '-$1').toLowerCase();

const getTotalXpAndCredits = challenges => ({
  xpTotal: challenges?.reduce((accumulator, {xp}) => accumulator + xp, 0),
  creditsTotal: challenges?.reduce((accumulator, {credits}) => accumulator + credits, 0)
});

export {getUser, getLoggedInUserChallenges, camelCaseToKebabCase, getTotalXpAndCredits, getUserById};
