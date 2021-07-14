import React from 'react';
import PropTypes from 'prop-types';
import ChallengeCard from './challenge-card';

function ChallengesSection({title, filteredChallenges, isAdmin, isScrollable}) {
  return (
    <section className="challenges-section">
      <h2 className="challenges-section__title">{title}</h2>
      <div className={`challenges-section__items challenges-section__items--${isScrollable && 'scrollable'}`}>
        {filteredChallenges?.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} isAdmin={isAdmin} />
        ))}
      </div>
    </section>
  );
}

ChallengesSection.propTypes = {
  title: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
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
  filteredChallenges: [],
  isAdmin: false,
  isScrollable: false
};

export default ChallengesSection;
