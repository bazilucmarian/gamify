import React from 'react';
import PropTypes from 'prop-types';
import ChallengesSection from '../../components/challenges-section';
import EmptyPlaceholder from '../../components/empty-placeholder';

function HomePage({challengesInProgress, challengesCompleted, isAdmin}) {
  if (challengesInProgress.length === 0 && challengesCompleted.length === 0) return <EmptyPlaceholder />;
  return (
    <div className="home-page">
      <ChallengesSection title="In progress Challenges" filteredChallenges={challengesInProgress} isAdmin={isAdmin} />
      <ChallengesSection title="Completed Challenges" filteredChallenges={challengesCompleted} isAdmin={isAdmin} />
    </div>
  );
}

HomePage.propTypes = {
  challengesInProgress: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xp: PropTypes.number,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  challengesCompleted: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xp: PropTypes.number,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  isAdmin: PropTypes.bool
};

HomePage.defaultProps = {
  challengesInProgress: [],
  challengesCompleted: [],
  isAdmin: false
};

export default HomePage;
