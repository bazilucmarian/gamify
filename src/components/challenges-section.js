import React from 'react';
import PropTypes from 'prop-types';

import ChallengeCard from './challenge-card';
import ShopCard from './shop-card';

function ChallengesSection({
  title,
  filteredChallenges,
  handleChangeStatus,
  isAdmin,
  isScrollable,

  handleUpdateChallenge,
  section,
  shopItems
}) {
  const handleOnClick = (userId, challengeId) => (status, operation) => {
    handleChangeStatus(challengeId, status, userId, operation);
  };

  const handleOnClickAdmin = (userId, challengeId, challenge) => (operation, status) => {
    if (status) {
      handleChangeStatus(challengeId, status, userId, operation);
    }
    handleUpdateChallenge(challengeId, operation, challenge);
  };

  if (filteredChallenges.length === 0 && section === 'challenge') {
    return null;
  }
  return (
    <section className="challenges-section">
      <h2 className="challenges-section__title">{title}</h2>

      <div className={`challenges-section__items challenges-section__items--${isScrollable && 'scrollable'}`}>
        {filteredChallenges?.map(challenge => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            isAdmin={isAdmin}
            onChangeStatus={handleOnClick(challenge.userId, challenge.id)}
            onUpdateChallenge={handleOnClickAdmin(challenge.userId, challenge.id, challenge)}
          />
        ))}
        {shopItems?.map(shopItem => (
          <ShopCard key={shopItem?.id} shopItem={shopItem} />
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
  filteredChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xp: PropTypes.number,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  shopItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  isScrollable: PropTypes.bool,
  section: PropTypes.string.isRequired
};

ChallengesSection.defaultProps = {
  handleChangeStatus: () => {},
  handleUpdateChallenge: () => {},

  filteredChallenges: [],
  shopItems: [],
  isAdmin: false,
  isScrollable: false
};

export default ChallengesSection;
