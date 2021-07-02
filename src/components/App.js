import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './sidebar';

const App = () => (
  <div className="app-wrapper">
    <Router>
      <Sidebar />
    </Router>
  </div>
);

export default App;
