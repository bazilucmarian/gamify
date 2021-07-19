// to be removed when the backend will be implemented

import {statusDictionary, userChallengesData, users} from '../mocks/fixtures';

const getUser = role => users.find(user => user.role === role);

const getLoggedInUserChallenges = userId => userChallengesData.find(user => user.userId === userId);

const camelCaseToKebabCase = string =>
  string?.replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').toLowerCase();

const calculateSum = (challenges, option) =>
  challenges
    .filter(({status}) => status === statusDictionary.validated)
    .reduce((acc, challenge) => acc + challenge[option], 0);

export {getUser, getLoggedInUserChallenges, camelCaseToKebabCase, calculateSum};
