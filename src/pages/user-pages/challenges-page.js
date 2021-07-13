import React from 'react';
import PropTypes from 'prop-types';
import ChallengesSection from '../../components/challenges-section';

function ChallengesPage({availableChallenges}) {
  return <ChallengesSection title="Available Challenges" filteredChallenges={availableChallenges} />;
}

ChallengesPage.propTypes = {
  availableChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xp: PropTypes.number,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  )
};

ChallengesPage.defaultProps = {
  availableChallenges: []
};

export default ChallengesPage;
