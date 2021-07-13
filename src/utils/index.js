/* eslint-disable import/no-cycle */
import calculateXp from './calculateXp';
import {navLinksUser, navLinksAdmin} from './nav-links';
import getInitials from './getInitials';
import {statusDictionary} from './status-dictionary';
import {
  camelCaseToKebabCase,
  getUser,
  getUserLoggedInChallenges,
  filteredChallengesWithStatus
} from './utils-functions';
import {challengesList, users, userChallengesDummy} from './dummy-data';

export {
  calculateXp,
  getInitials,
  navLinksUser,
  navLinksAdmin,
  statusDictionary,
  getUser,
  getUserLoggedInChallenges,
  filteredChallengesWithStatus,
  camelCaseToKebabCase,
  challengesList,
  users,
  userChallengesDummy
};
