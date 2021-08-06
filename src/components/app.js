import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import OverviewPage from '../pages/user-pages/overview-page';
import ChallengesPage from '../pages/user-pages/challenges-page';
import ShopPage from '../pages/user-pages/shop-page';
import ValidationPageAdmin from '../pages/admin-pages/validation-page-admin';
import ChallengesPageAdmin from '../pages/admin-pages/challenges-page-admin';
import ShopPageAdmin from '../pages/admin-pages/shop-page-admin';
import NotFoundPage from '../pages/not-found-page';
import SingleProduct from '../pages/user-pages/shop-page-single-product';
import {navLinksUser, navLinksAdmin} from '../utils';
import {getUserService} from '../services/services';

import Sidebar from './sidebar';

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [routes, setRoutes] = useState(navLinksUser);
  const isAdmin = loggedInUser.role === 'admin';

  const handleSwitchUser = async () => {
    const userData = await getUserService(isAdmin ? 'user' : 'admin');
    setLoggedInUser(userData);
  };

  const forceUpdate = async () => {
    const userData = await getUserService('user');
    setLoggedInUser(userData);
  };

  useEffect(() => {
    setRoutes(isAdmin ? navLinksAdmin : navLinksUser);
  }, [isAdmin]);

  useEffect(() => {
    (async () => {
      const userData = await getUserService('user');
      setLoggedInUser(userData);
      localStorage.setItem('userInfo', JSON.stringify(userData));
    })();
  }, []);

  return (
    <div className="app-wrapper">
      <Sidebar routes={routes} loggedInUser={loggedInUser} onSwitchUser={handleSwitchUser} />
      <div className="app-wrapper__screens">
        <Switch>
          <Route path="/" exact render={props => <OverviewPage {...props} loggedInUserId={loggedInUser?.id} />} />
          <Route path="/challenges" render={props => <ChallengesPage {...props} loggedInUserId={loggedInUser?.id} />} />
          <Route
            path="/shop"
            exact
            render={props => <ShopPage {...props} loggedInUser={loggedInUser} forceUpdate={forceUpdate} />}
          />
          <Route path="/shop/:id" exact render={props => <SingleProduct {...props} loggedInUser={loggedInUser} />} />

          <Route path="/admin/challenges" render={props => <ChallengesPageAdmin {...props} />} />
          <Route
            path="/admin/validation"
            render={props => <ValidationPageAdmin {...props} loggedInUserId={loggedInUser.id} />}
          />
          <Route path="/admin/shop" render={props => <ShopPageAdmin {...props} />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
