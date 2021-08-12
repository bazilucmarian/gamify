import React, {useState} from 'react';
import PropTypes from 'prop-types';

import useWindowWidth from '../../hooks/use-window-width';
import EmptyPlaceholder from '../empty-placeholder';
import {SLIDE_DIRECTION_LEFT, SLIDE_DIRECTION_RIGHT} from '../../constants/slider-direction';

import Slide from './slide';
import Dots from './dots';
import Controls from './controls';

function Slider({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = useWindowWidth();

  const goToSlide = newIndex => {
    setCurrentIndex(newIndex);
  };

  const changeSlide = type => {
    switch (type) {
      case SLIDE_DIRECTION_RIGHT:
        setCurrentIndex(prevState => prevState + 1);
        break;
      case SLIDE_DIRECTION_LEFT:
        setCurrentIndex(prevState => prevState - 1);
        break;

      default:
        break;
    }
  };

  if (!images.length) {
    return <EmptyPlaceholder />;
  }
  return (
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{
          transform: `translateX(${-(currentIndex * windowWidth)}px)`,
          transition: 'transform ease-out 0.30s',
          width: `${windowWidth * images.length}px`
        }}
      >
        {images.map(image => (
          <Slide key={image.name} imageUrl={image.imageUrl} imageAlt={image.name} width={windowWidth} />
        ))}
      </div>
      <Dots allImages={images} currentIndex={currentIndex} goToSlide={goToSlide} />
      <Controls currentIndex={currentIndex} allImages={images} changeSlide={changeSlide} />
    </div>
  );
}
Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      name: PropTypes.string
    })
  )
};
Slider.defaultProps = {
  images: []
};
export default Slider;
