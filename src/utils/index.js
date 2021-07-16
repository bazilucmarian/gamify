/* eslint-disable import/no-cycle */
import calculateXp from './calculateXp';
import {navLinksUser, navLinksAdmin} from './nav-links';
import getInitials from './getInitials';
import {statusDictionary} from './status-dictionary';
import {
  camelCaseToKebabCase,
  getUser,
  getLoggedInUserChallenges,
  filteredChallengesWithStatus
} from './utils-functions';
import {challengesList, users, userChallengesDummy} from '../mocks/fixtures';

export {
  calculateXp,
  getInitials,
  navLinksUser,
  navLinksAdmin,
  statusDictionary,
  getUser,
  getLoggedInUserChallenges,
  filteredChallengesWithStatus,
  camelCaseToKebabCase,
  challengesList,
  users,
  userChallengesDummy
};
