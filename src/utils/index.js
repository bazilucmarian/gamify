/* eslint-disable import/no-cycle */
import {challengesList, users, userChallengesData} from '../mocks/fixtures';

import calculateXp from './calculate-xp';
import {navLinksUser, navLinksAdmin} from './nav-links';
import getInitials from './get-initials';
import {statusDictionary} from './status-dictionary';
import {
  camelCaseToKebabCase,
  getUser,
  getLoggedInUserChallenges,
  filteredChallengesWithStatus
} from './utils-functions';

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
  userChallengesData
};
