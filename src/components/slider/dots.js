import React from 'react';
import PropTypes from 'prop-types';

import Dot from './dot';

const Dots = ({allImages, currentIndex, goToSlide}) => (
  <ul className="dots">
    {allImages?.map((image, index) => (
      <Dot key={image.name} isActive={currentIndex === index} index={index} goToSlide={goToSlide} />
    ))}
  </ul>
);

Dots.propTypes = {
  goToSlide: PropTypes.func.isRequired,
  allImages: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired
};
export default Dots;
