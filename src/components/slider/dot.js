import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({isActive, goToSlide, index}) => (
  <div
    className={`dot ${isActive && 'dot--active'}`}
    onClick={() => goToSlide(index)}
    onKeyDown={() => goToSlide(index)}
    role="button"
    tabIndex="0"
  />
);

Dot.propTypes = {
  goToSlide: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};
export default Dot;
