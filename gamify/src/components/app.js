import React, {useEffect, useState} from 'react';
import {ReactQueryDevtools} from 'react-query/devtools';
import {Switch, Route, Redirect} from 'react-router-dom';

import OverviewPage from '../pages/user-pages/overview-page';
import ChallengesPage from '../pages/user-pages/challenges-page';
import ShopPage from '../pages/user-pages/shop-page';
import ValidationPageAdmin from '../pages/admin-pages/validation-page-admin';
import ChallengesPageAdmin from '../pages/admin-pages/challenges-page-admin';
import RegisterPage from '../pages/user-pages/register-page';
import LoginPage from '../pages/user-pages/login-page';
import ShopPageAdmin from '../pages/admin-pages/shop-page-admin';
import NotFoundPage from '../pages/not-found-page';
import SingleProduct from '../pages/user-pages/shop-page-single-product';
import {navLinksUser, navLinksAdmin} from '../utils';
import {useUser} from '../hooks/use-user';
import ProtectedRoute from '../utils/protected-route';

import Sidebar from './sidebar';
import RoleBasedRouting from './role-based-routing';
import Loading from './loader';

function App() {
  const [routes, setRoutes] = useState(navLinksUser);
  const {user: loggedInUser} = useUser();

  const isAdmin = loggedInUser?.role === 'Admin';

  useEffect(() => {
    setRoutes(isAdmin ? navLinksAdmin : navLinksUser);
  }, [isAdmin]);

  return (
    <>
      <div className={loggedInUser && 'app-wrapper'}>
        {loggedInUser && <Sidebar routes={routes} loggedInUser={loggedInUser} />}
        <div className={loggedInUser && 'app-wrapper__screens'}>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to={isAdmin ? '/admin/challenges?page=1' : '/overview'} />}
            />
            <ProtectedRoute
              path="/login"
              redirectPath={isAdmin ? '/admin/challenges?page=1' : '/overview'}
              user={loggedInUser}
              component={LoginPage}
            />
            <ProtectedRoute
              path="/register"
              redirectPath={isAdmin ? '/admin/challenges?page=1' : '/overview'}
              user={loggedInUser}
              component={RegisterPage}
            />

            <RoleBasedRouting
              path="/overview"
              redirectPath="/login"
              component={OverviewPage}
              roles={['USER']}
              user={loggedInUser}
            />

            <RoleBasedRouting
              path="/challenges"
              redirectPath="/login"
              component={ChallengesPage}
              roles={['USER']}
              user={loggedInUser}
            />

            <RoleBasedRouting
              path="/shop"
              redirectPath="/login"
              component={ShopPage}
              roles={['USER']}
              user={loggedInUser}
              exact
            />

            <RoleBasedRouting
              path="/shop/:productId"
              redirectPath="/login"
              component={SingleProduct}
              roles={['USER', 'ADMIN']}
              user={loggedInUser}
            />

            <RoleBasedRouting
              path="/admin/challenges"
              redirectPath="/login"
              component={ChallengesPageAdmin}
              roles={['ADMIN']}
              user={loggedInUser}
            />
            <RoleBasedRouting
              path="/admin/validation"
              redirectPath="/login"
              component={ValidationPageAdmin}
              roles={['ADMIN']}
              user={loggedInUser}
            />
            <RoleBasedRouting
              path="/admin/shop"
              redirectPath="/login"
              component={ShopPageAdmin}
              roles={['ADMIN']}
              user={loggedInUser}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Loading />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
