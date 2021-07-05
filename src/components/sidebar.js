import React from 'react';
import Navigation from './navigation';
import UserCard from './user-card';
import RewardInfo from './reward-info';
import ProgressCard from './progress-card';
import Avatar from '../assets/imgs/User.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__user-details">
          <UserCard avatar={Avatar} />
          <RewardInfo />
          <ProgressCard userXp={50} />
        </div>
        <div className="sidebar__navigation">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
