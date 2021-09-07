import React from 'react';
import PropTypes from 'prop-types';

function ChallengesSection({title, isScrollable, hasData, children}) {
  return (
    Boolean(hasData) && (
      <section className="challenges-section">
        <h2 className="challenges-section__title">{title}</h2>
        <div className={`challenges-section__items challenges-section__items--${isScrollable && 'scrollable'}`}>
          {children}
        </div>
      </section>
    )
  );
}

ChallengesSection.propTypes = {
  title: PropTypes.string.isRequired,
  isScrollable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  hasData: PropTypes.number.isRequired
};

ChallengesSection.defaultProps = {
  isScrollable: false
};

export default ChallengesSection;
