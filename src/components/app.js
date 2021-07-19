import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import OverviewPage from '../pages/user-pages/overview-page';
import ChallengesPage from '../pages/user-pages/challenges-page';
import ShopPage from '../pages/user-pages/shop-page';
import ValidationPageAdmin from '../pages/admin-pages/validation-page-admin';
import ChallengesPageAdmin from '../pages/admin-pages/challenges-page-admin';
import ShopPageAdmin from '../pages/admin-pages/shop-page-admin';
import NotFoundPage from '../pages/not-found-page';
import {filteredChallengesWithStatus, getUser, getLoggedInUserChallenges, navLinksUser, navLinksAdmin} from '../utils';
import {challengesList} from '../mocks/fixtures';

// to be removed when fetch mock will be implemented
const userData = getUser('user');
const adminData = getUser('admin');

const App = () => {
  // to be removed later
  const [challengesFromAdmin] = useState(challengesList);
  const [loggedInUser, setLoggedInUser] = useState(userData);
  const [loggedInUserChallenges] = useState(getLoggedInUserChallenges(loggedInUser.id));
  const [routes, setRoutes] = useState(navLinksUser);

  const isAdmin = loggedInUser.role === 'admin';
  const availableChallenges = filteredChallengesWithStatus(
    loggedInUserChallenges.challenges,
    challengesFromAdmin,
    'Available'
  );

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
              render={props => <OverviewPage {...props} isAdmin={isAdmin} loggedInUser={loggedInUser} />}
            />
            <Route path="/challenges" render={props => <ChallengesPage {...props} loggedInUser={loggedInUser} />} />
            <Route path="/shop" render={props => <ShopPage {...props} />} />
            <Route path="/admin/challenges" render={props => <ChallengesPageAdmin {...props} />} />
            <Route path="/admin/validation" render={props => <ValidationPageAdmin {...props} />} />
            <Route path="/admin/shop" render={props => <ShopPageAdmin {...props} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
