import React from 'react';
import PropTypes from 'prop-types';

import ArrowLeft from '../../icons/arrow-left';

const ControlLeft = ({changeSlide}) => (
  <div className="control-left">
    <ArrowLeft changeSlide={changeSlide} />
  </div>
);

ControlLeft.propTypes = {
  changeSlide: PropTypes.func.isRequired
};

export default ControlLeft;
