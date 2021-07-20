import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import OverviewPage from '../pages/user-pages/overview-page';
import ChallengesPage from '../pages/user-pages/challenges-page';
import ShopPage from '../pages/user-pages/shop-page';
import ValidationPageAdmin from '../pages/admin-pages/validation-page-admin';
import ChallengesPageAdmin from '../pages/admin-pages/challenges-page-admin';
import ShopPageAdmin from '../pages/admin-pages/shop-page-admin';
import NotFoundPage from '../pages/not-found-page';
import {getUser, navLinksUser, navLinksAdmin} from '../utils';

import Sidebar from './sidebar';

// to be removed when fetch mock will be implemented
const userData = getUser('user');
const adminData = getUser('admin');

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(userData);
  const [routes, setRoutes] = useState(navLinksUser);
  const isAdmin = loggedInUser.role === 'admin';

  useEffect(() => {
    setRoutes(isAdmin ? navLinksAdmin : navLinksUser);
  }, [isAdmin, loggedInUser.role]);

  const handleSwitchUser = () => {
    setLoggedInUser(isAdmin ? userData : adminData);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar
          routes={routes}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          onSwitchUser={handleSwitchUser}
        />
        <div className="app-wrapper__screens">
          <Switch>
            <Route
              path="/"
              exact
              render={props => <OverviewPage {...props} isAdmin={isAdmin} loggedInUserId={loggedInUser.id} />}
            />
            <Route
              path="/challenges"
              render={props => <ChallengesPage {...props} loggedInUserId={loggedInUser.id} />}
            />
            <Route path="/shop" render={props => <ShopPage {...props} />} />
            <Route path="/admin/challenges" render={props => <ChallengesPageAdmin {...props} isAdmin={isAdmin} />} />
            <Route
              path="/admin/validation"
              render={props => <ValidationPageAdmin {...props} isAdmin={isAdmin} loggedInUserId={loggedInUser.id} />}
            />
            <Route path="/admin/shop" render={props => <ShopPageAdmin {...props} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
