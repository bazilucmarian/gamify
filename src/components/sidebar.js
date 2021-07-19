import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import UserCard from './user-card';
import RewardInfo from './reward-info';
import ProgressCard from './progress-card';
import {getInProgressOrCompletedChallenges} from '../services/services';
import {calculateSum} from '../utils';

function Sidebar({routes, loggedInUser, onSwitchUser}) {
  const {profilePic, name, job, id} = loggedInUser;

  const [completedChallenges, setCompletedChallenges] = useState([]);

  const creditsTotal = calculateSum(completedChallenges, 'credits');
  const xpTotal = calculateSum(completedChallenges, 'xp');

  useEffect(() => {
    const getUserChallenges = async () => {
      const getFilteredUserChallenges = await getInProgressOrCompletedChallenges(id);
      setCompletedChallenges(getFilteredUserChallenges.completedChallenges);
    };

    getUserChallenges();
  }, [id]);

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__user-details">
          <UserCard avatar={profilePic} userName={name} jobTitle={job} />
          <RewardInfo xp={xpTotal} credits={creditsTotal} />
          <ProgressCard userXp={xpTotal} />
        </div>
        <div className="sidebar__navigation">
          <Navigation routes={routes} onSwitchUser={onSwitchUser} />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onSwitchUser: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape({
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
