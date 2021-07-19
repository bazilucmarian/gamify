import calculateXp from './calculateXp';
import {navLinksUser, navLinksAdmin} from './nav-links';
import getInitials from './getInitials';
import {statusDictionary} from './status-dictionary';
import {camelCaseToKebabCase, getUser, getLoggedInUserChallenges, calculateSum} from './utils-functions';
import {challengesList, users, userChallengesData} from '../mocks/fixtures';

export {
  calculateXp,
  getInitials,
  navLinksUser,
  navLinksAdmin,
  statusDictionary,
  getUser,
  calculateSum,
  getLoggedInUserChallenges,
  camelCaseToKebabCase,
  challengesList,
  users,
  userChallengesData
};
