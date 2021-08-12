import React from 'react';
import PropTypes from 'prop-types';

function Dot({isActive, goToSlide, index}) {
  const handleOnClick = () => {
    goToSlide(index);
  };
  return (
    <div
      className={`dot ${isActive && 'dot--active'}`}
      onClick={handleOnClick}
      onKeyDown={() => handleOnClick}
      role="button"
      tabIndex="0"
    />
  );
}

Dot.propTypes = {
  goToSlide: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};
export default Dot;
