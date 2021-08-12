import React from 'react';
import PropTypes from 'prop-types';

import Dot from './dot';

function Dots({allImages, currentIndex, goToSlide}) {
  return (
    <ul className="dots">
      {allImages?.map((image, index) => (
        <Dot key={image.name} isActive={currentIndex === index} index={index} goToSlide={goToSlide} />
      ))}
    </ul>
  );
}

Dots.propTypes = {
  goToSlide: PropTypes.func.isRequired,
  allImages: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired
};
export default Dots;
