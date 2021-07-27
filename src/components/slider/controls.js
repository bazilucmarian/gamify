import React from 'react';
import PropTypes from 'prop-types';

import ControlLeft from './control-left';
import ControlRight from './control-right';

const Controls = ({currentIndex, allImages, changeSlide}) => (
  <>
    {currentIndex > 0 && <ControlLeft changeSlide={changeSlide} />}
    {currentIndex < allImages.length - 1 && <ControlRight changeSlide={changeSlide} />}
  </>
);
Controls.propTypes = {
  changeSlide: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  allImages: PropTypes.array.isRequired
};

export default Controls;
