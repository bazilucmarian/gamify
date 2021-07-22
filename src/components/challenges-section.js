import React from 'react';
import PropTypes from 'prop-types';

import ChallengeCard from './challenge-card';
import Button from './button';

function ChallengesSection({
  title,
  filteredChallenges,
  handleChangeStatus,
  isAdmin,
  isScrollable,
  handleAddNewChallenge,
  handleUpdateChallenge
}) {
  const handleOnClick = (userId, challengeId) => (status, operation) => {
    handleChangeStatus(challengeId, status, userId, operation);
  };

  const handleOnClickAdmin = (userId, challengeId) => (operation, status, challenge) => {
    if (status) {
      handleChangeStatus(challengeId, status, userId, operation);
    }
    handleUpdateChallenge(challengeId, operation, challenge);
  };

  if (filteredChallenges.length === 0) {
    return null;
  }
  return (
    <section className="challenges-section">
      <h2 className="challenges-section__title">{title}</h2>
      {isAdmin && !title.includes('validated') && (
        <div className="challenges-section__modalBtn">
          {/* for testing */}
          <Button color="secondary" variant="contained-secondary" size="sm" onClick={handleAddNewChallenge}>
            Add new
          </Button>
        </div>
      )}

      <div className={`challenges-section__items challenges-section__items--${isScrollable && 'scrollable'}`}>
        {filteredChallenges?.map(challenge => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            isAdmin={isAdmin}
            onChangeStatus={handleOnClick(challenge.userId, challenge.id)}
            onUpdateChallenge={handleOnClickAdmin(challenge.userId, challenge.id)}
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
  handleUpdateChallenge: PropTypes.func,
  handleAddNewChallenge: PropTypes.func,
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
  handleUpdateChallenge: () => {},
  handleAddNewChallenge: () => {},

  filteredChallenges: [],
  isAdmin: false,
  isScrollable: false
};

export default ChallengesSection;
