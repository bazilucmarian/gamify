import React from 'react';
import PropTypes from 'prop-types';

import ChallengeCard from './challenge-card';

function ChallengesSection({
  title,
  filteredChallenges,
  handleChangeStatus,
  isAdmin,
  isScrollable,
  handleDeleteChallenge
}) {
  const handleOnClick = (userId, challengeId) => (status, operation) => {
    handleChangeStatus(challengeId, status, userId, operation);
  };

  if (filteredChallenges.length === 0) return null;
  return (
    <section className="challenges-section">
      <h2 className="challenges-section__title">{title}</h2>
      <div className={`challenges-section__items challenges-section__items--${isScrollable && 'scrollable'}`}>
        {filteredChallenges?.map(challenge => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            isAdmin={isAdmin}
            handleChangeStatus={handleOnClick(challenge.userId, challenge.id)}
            handleDeleteChallenge={handleDeleteChallenge}
          />
        ))}
      </div>
    </section>
  );
}

ChallengesSection.propTypes = {
  title: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
  handleChangeStatus: PropTypes.func,
  handleDeleteChallenge: PropTypes.func,
  filteredChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xp: PropTypes.number,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  isScrollable: PropTypes.bool
};

ChallengesSection.defaultProps = {
  handleChangeStatus: () => {},
  handleDeleteChallenge: () => {},
  filteredChallenges: [],
  isAdmin: false,
  isScrollable: false
};

export default ChallengesSection;
