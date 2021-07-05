/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import HomePage from '../pages/home-page';
import ChallengesPage from '../pages/challenges-page';
import ShopPage from '../pages/shop-page';
import AdminPage from '../pages/admin-page';
import NotFoundPage from '../pages/not-found-page';

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Sidebar />
      <Switch>
        <Route path="/" exact render={props => <HomePage {...props} />} />
        <Route path="/challenges" render={props => <ChallengesPage {...props} />} />
        <Route path="/shop" render={props => <ShopPage {...props} />} />
        <Route path="/admin" render={props => <AdminPage {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
