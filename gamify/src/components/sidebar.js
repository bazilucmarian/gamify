import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './navigation';
import UserCard from './user-card';
import RewardInfo from './reward-info';
import ProgressCard from './progress-card';

function Sidebar({routes, loggedInUser}) {
  const {profilePicture, username, job, xp: xpTotal, credits: creditsTotal, role} = loggedInUser;
  const isAdmin = role === 'Admin';

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className={isAdmin ? 'sidebar__user-details--admin' : 'sidebar__user-details'}>
          <UserCard avatar={profilePicture} userName={username} jobTitle={job} />
          {!isAdmin && (
            <>
              <RewardInfo xp={xpTotal} credits={creditsTotal} />
              <ProgressCard userXp={xpTotal} />
            </>
          )}
        </div>
        <div className="sidebar__navigation">
          <Navigation routes={routes} />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    job: PropTypes.string,
    profilePicture: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number,
    role: PropTypes.string
  }).isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Sidebar;
