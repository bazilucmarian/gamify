import {challengesList, users, userChallengesData} from '../mocks/fixtures';

import calculateXp from './calculate-xp';
import checkUrl from './check-url';
import {navLinksUser, navLinksAdmin} from './nav-links';
import getInitials from './get-initials';
import {statusDictionary} from './status-dictionary';
import {camelCaseToKebabCase, getUser, getLoggedInUserChallenges, getTotalXpAndCredits} from './utils-functions';

export {
  calculateXp,
  checkUrl,
  getInitials,
  navLinksUser,
  navLinksAdmin,
  statusDictionary,
  getUser,
  getTotalXpAndCredits,
  getLoggedInUserChallenges,
  camelCaseToKebabCase,
  challengesList,
  users,
  userChallengesData
};
