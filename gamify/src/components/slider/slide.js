import React from 'react';
import PropTypes from 'prop-types';

function Slide({imageUrl, imageAlt, width}) {
  return (
    <div className="slide" style={{width}}>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
}

Slide.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  width: PropTypes.number.isRequired
};
Slide.defaultProps = {
  imageUrl: '',
  imageAlt: ''
};
export default Slide;
