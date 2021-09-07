import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Switch, Route} from 'react-router-dom';

import ProtectedRoute from '../../utils/protected-route';
import RoleBasedRouting from '../role-based-routing';
import {
  ADMIN_CHALLENGES_PAGE_ROUTE_LINK,
  ADMIN_HOME_PAGE_ROUTE_LINK,
  ADMIN_SHOP_PAGE_ROUTE_LINK,
  LOGIN_ROUTE_NAME,
  REGISTER_ROUTE_NAME,
  USER_CHALLENGES_PAGE_ROUTE_LINK_ROOT,
  USER_HOME_PAGE_ROUTE_LINK,
  USER_SHOP_PAGE_ROUTE_LINK,
  USER_SHOP_PAGE_SINGLE_ROUTE_LINK,
  USER_SWITCH_ADMIN_PAGE_ROUTE_LINK
} from '../../constants/routes';

const LoginPage = lazy(() => import('../../pages/user-pages/login-page'));
const RegisterPage = lazy(() => import('../../pages/user-pages/register-page'));
const ShopPage = lazy(() => import('../../pages/user-pages/shop-page'));
const SingleProductPage = lazy(() => import('../../pages/user-pages/shop-page-single-product'));
const OverviewPage = lazy(() => import('../../pages/user-pages/overview-page'));
const ChallengesPage = lazy(() => import('../../pages/user-pages/challenges-page'));
const ValidationPageAdmin = lazy(() => import('../../pages/admin-pages/validation-page-admin'));
const ChallengesPageAdmin = lazy(() => import('../../pages/admin-pages/challenges-page-admin'));
const ShopPageAdmin = lazy(() => import('../../pages/admin-pages/shop-page-admin'));
const NotFoundPage = lazy(() => import('../../pages/not-found-page'));

function Router({isAdmin, loggedInUser}) {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to={isAdmin ? ADMIN_HOME_PAGE_ROUTE_LINK : USER_HOME_PAGE_ROUTE_LINK} />}
        />

        <ProtectedRoute
          path={LOGIN_ROUTE_NAME}
          redirectPath={isAdmin ? ADMIN_HOME_PAGE_ROUTE_LINK : USER_HOME_PAGE_ROUTE_LINK}
          user={loggedInUser}
          component={LoginPage}
        />
        <ProtectedRoute
          path={REGISTER_ROUTE_NAME}
          redirectPath={isAdmin ? ADMIN_HOME_PAGE_ROUTE_LINK : USER_HOME_PAGE_ROUTE_LINK}
          user={loggedInUser}
          component={RegisterPage}
        />

        <RoleBasedRouting
          path={USER_HOME_PAGE_ROUTE_LINK}
          redirectPath={LOGIN_ROUTE_NAME}
          component={OverviewPage}
          roles={['USER']}
          user={loggedInUser}
        />

        <RoleBasedRouting
          path={USER_CHALLENGES_PAGE_ROUTE_LINK_ROOT}
          redirectPath={LOGIN_ROUTE_NAME}
          component={ChallengesPage}
          roles={['USER']}
          user={loggedInUser}
        />

        <RoleBasedRouting
          path={USER_SHOP_PAGE_ROUTE_LINK}
          redirectPath={LOGIN_ROUTE_NAME}
          component={ShopPage}
          roles={['USER']}
          user={loggedInUser}
          exact
        />

        <RoleBasedRouting
          path={USER_SHOP_PAGE_SINGLE_ROUTE_LINK}
          redirectPath={LOGIN_ROUTE_NAME}
          component={SingleProductPage}
          roles={['USER', 'ADMIN']}
          user={loggedInUser}
          exact
        />

        <RoleBasedRouting
          path={USER_SWITCH_ADMIN_PAGE_ROUTE_LINK}
          redirectPath={LOGIN_ROUTE_NAME}
          component={ChallengesPageAdmin}
          roles={['ADMIN']}
          user={loggedInUser}
        />
        <RoleBasedRouting
          path={ADMIN_CHALLENGES_PAGE_ROUTE_LINK}
          redirectPath={LOGIN_ROUTE_NAME}
          component={ValidationPageAdmin}
          roles={['ADMIN']}
          user={loggedInUser}
        />
        <RoleBasedRouting
          path={ADMIN_SHOP_PAGE_ROUTE_LINK}
          redirectPath={LOGIN_ROUTE_NAME}
          component={ShopPageAdmin}
          roles={['ADMIN']}
          user={loggedInUser}
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}
Router.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object.isRequired
};
export default Router;
