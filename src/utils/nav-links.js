import {
  USER_HOME_PAGE_ROUTE_LINK,
  USER_CHALLENGES_PAGE_ROUTE_LINK,
  USER_SHOP_PAGE_ROUTE_LINK,
  USER_SWITCH_ADMIN_PAGE_ROUTE_LINK,
  USER_HOME_ROUTE_NAME,
  USER_CHALLENGES_ROUTE_NAME,
  USER_SHOP_ROUTE_NAME,
  USER_SWITCH_ADMIN_ROUTE_NAME,
  ADMIN_HOME_PAGE_ROUTE_LINK,
  ADMIN_CHALLENGES_PAGE_ROUTE_LINK,
  ADMIN_SHOP_PAGE_ROUTE_LINK,
  ADMIN_SWITCH_USER_PAGE_ROUTE_LINK,
  ADMIN_HOME_ROUTE_NAME,
  ADMIN_CHALLENGES_ROUTE_NAME,
  ADMIN_SHOP_ROUTE_NAME,
  ADMIN_SWITCH_USER_ROUTE_NAME
} from '../constants/routes';

export const navLinksUser = [
  {name: USER_HOME_ROUTE_NAME, link: USER_HOME_PAGE_ROUTE_LINK, exact: true},
  {name: USER_CHALLENGES_ROUTE_NAME, link: USER_CHALLENGES_PAGE_ROUTE_LINK, exact: true},
  {name: USER_SHOP_ROUTE_NAME, link: USER_SHOP_PAGE_ROUTE_LINK, exact: true},
  {name: USER_SWITCH_ADMIN_ROUTE_NAME, link: USER_SWITCH_ADMIN_PAGE_ROUTE_LINK, exact: true}
];

export const navLinksAdmin = [
  {name: ADMIN_HOME_ROUTE_NAME, link: ADMIN_HOME_PAGE_ROUTE_LINK, exact: true},
  {name: ADMIN_CHALLENGES_ROUTE_NAME, link: ADMIN_CHALLENGES_PAGE_ROUTE_LINK, exact: true},
  {name: ADMIN_SHOP_ROUTE_NAME, link: ADMIN_SHOP_PAGE_ROUTE_LINK, exact: true},
  {name: ADMIN_SWITCH_USER_ROUTE_NAME, link: ADMIN_SWITCH_USER_PAGE_ROUTE_LINK, exact: true}
];
