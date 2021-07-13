import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import HomePage from '../pages/home-page';
import ChallengesPage from '../pages/challenges-page';
import ShopPage from '../pages/shop-page';
import ValidationPageAdmin from '../pages/validation-page-admin';
import ChallengesPageAdmin from '../pages/challenges-page-admin';
import ShopPageAdmin from '../pages/shop-page-admin';
import NotFoundPage from '../pages/not-found-page';
import {filteredChallengesWithStatus, getUser, getUserLoggedInChallenges, navLinksUser, navLinksAdmin} from '../utils';
import {challengesList} from '../utils/dummy-data';

// to be removed later
const userData = getUser('user');

const App = () => {
  // to be removed later
  const [challengesFromAdmin] = useState(challengesList);
  const [loggedInUser, setLoggedInUser] = useState(userData);
  const [loggedInUserChallenges] = useState(getUserLoggedInChallenges(loggedInUser.id));
  const [routes, setRoutes] = useState(navLinksUser);

  const isAdmin = loggedInUser.role === 'admin';
  const availableChallenges = filteredChallengesWithStatus(
    loggedInUserChallenges.challenges,
    challengesFromAdmin,
    'Available'
  );

  useEffect(() => {
    if (loggedInUser.role === 'user') {
      setRoutes(navLinksUser);
    } else {
      setRoutes(navLinksAdmin);
    }
  }, [loggedInUser.role]);

  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar routes={routes} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
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
