import React, {useEffect, useState} from 'react';
import {ReactQueryDevtools} from 'react-query/devtools';

import {navLinksUser, navLinksAdmin} from '../utils';
import {useUser} from '../hooks/use-user';

import Sidebar from './sidebar';
import Loading from './loader';
import Router from './router';

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
          <Router isAdmin={isAdmin} loggedInUser={loggedInUser} />
        </div>
      </div>
      <Loading />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
