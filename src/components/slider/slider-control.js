import React from 'react';
import PropTypes from 'prop-types';

import ArrowLeft from '../../icons/arrow-left';
import ArrowRight from '../../icons/arrow-right';
import {SLIDE_DIRECTION_LEFT, SLIDE_DIRECTION_RIGHT} from '../../constants/slider-direction';

const SliderControl = ({direction, changeSlide}) => {
  const onChangeSlidePrevious = () => {
    changeSlide(SLIDE_DIRECTION_LEFT);
  };
  const onChangeSlideNext = () => {
    changeSlide(SLIDE_DIRECTION_RIGHT);
  };
  return (
    <div className={`control control--${direction}`}>
      {direction === SLIDE_DIRECTION_LEFT && <ArrowLeft onClick={onChangeSlidePrevious} />}
      {direction === SLIDE_DIRECTION_RIGHT && <ArrowRight onClick={onChangeSlideNext} />}
    </div>
  );
};

SliderControl.propTypes = {
  direction: PropTypes.oneOf([SLIDE_DIRECTION_LEFT, SLIDE_DIRECTION_RIGHT]).isRequired,
  changeSlide: PropTypes.func.isRequired
};
export default SliderControl;
