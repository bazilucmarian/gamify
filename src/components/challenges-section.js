import React from 'react';
import PropTypes from 'prop-types';
import ChallengeCard from './challenge-card';

export default function ChallengesSection({title, filteredChallenges, isAdmin}) {
  if (filteredChallenges.length === 0) return null;
  return (
    <section className="challenges-section">
      <h2 className="challenges-section__title">{title}</h2>
      <div className="challenges-section__items">
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
  )
};

ChallengesSection.defaultProps = {
  filteredChallenges: [],
  isAdmin: false
};
