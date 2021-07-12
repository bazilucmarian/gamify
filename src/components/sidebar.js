import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import UserCard from './user-card';
import RewardInfo from './reward-info';
import ProgressCard from './progress-card';

function Sidebar({handleSwitchAdminOrUser, routes, userLoggedIn}) {
  const {profilePic, name, job, xp, credits} = userLoggedIn;

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__user-details">
          <UserCard avatar={profilePic} userName={name} jobTitle={job} />
          <RewardInfo xp={xp} credits={credits} />
          <ProgressCard userXp={xp} />
        </div>
        <div className="sidebar__navigation">
          <Navigation handleSwitchAdminOrUser={handleSwitchAdminOrUser} routes={routes} />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  handleSwitchAdminOrUser: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    job: PropTypes.string,
    profilePic: PropTypes.string,
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
