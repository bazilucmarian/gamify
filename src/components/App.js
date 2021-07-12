import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import HomePage from '../pages/home-page';
import ChallengesPage from '../pages/challenges-page';
import ShopPage from '../pages/shop-page';
import AdminPage from '../pages/admin-page';
import NotFoundPage from '../pages/not-found-page';

import {navLinksUser, navLinksAdmin} from '../utils/index';
import {filteredChallengesWithStatus, generateUser, getUserLoggedInChallenges} from '../utils/utils-functions';
import {challengesList} from '../utils/dummy-data';

const App = () => {
  const userData = generateUser('user');
  const adminData = generateUser('admin');

  const [challengesFromAdmin, setChallengesFromAdmin] = useState(challengesList);
  const [userLoggedIn, setUserLoggedIn] = useState(userData);
  const [userLoggedInChallenges, setUseLoggedInChallenges] = useState(getUserLoggedInChallenges(userLoggedIn.id));
  const [routes, setRoutes] = useState(navLinksUser);

  const isAdmin = userLoggedIn.role === 'admin';
  const availableChallenges = filteredChallengesWithStatus(
    userLoggedInChallenges.challenges,
    challengesFromAdmin,
    'Available'
  );

  const handleSwitchAdminOrUser = () => {
    setUserLoggedIn(userLoggedIn.role === 'user' ? adminData : userData);
    setRoutes(userLoggedIn.role === 'user' ? navLinksAdmin : navLinksUser);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar handleSwitchAdminOrUser={handleSwitchAdminOrUser} routes={routes} userLoggedIn={userLoggedIn} />
        <div className="app-wrapper__screens">
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <HomePage {...props} isAdmin={isAdmin} challengesInProgress={[]} challengesCompleted={[]} />
              )}
            />
            <Route
              path="/challenges"
              render={props => <ChallengesPage {...props} availableChallenges={availableChallenges} />}
            />
            <Route path="/shop" render={props => <ShopPage {...props} />} />
            <Route path="/admin" render={props => <AdminPage {...props} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
