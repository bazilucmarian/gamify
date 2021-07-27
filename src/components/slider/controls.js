import React from 'react';
import PropTypes from 'prop-types';

import {SLIDE_DIRECTION_LEFT, SLIDE_DIRECTION_RIGHT} from '../../constants/slider-direction';

import SliderControl from './slider-control';

function Controls({currentIndex, allImages, changeSlide}) {
  return (
    <>
      {currentIndex > 0 && <SliderControl changeSlide={changeSlide} direction={SLIDE_DIRECTION_LEFT} />}
      {currentIndex < allImages.length - 1 && (
        <SliderControl changeSlide={changeSlide} direction={SLIDE_DIRECTION_RIGHT} />
      )}
    </>
  );
}
Controls.propTypes = {
  changeSlide: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  allImages: PropTypes.array.isRequired
};

export default Controls;
