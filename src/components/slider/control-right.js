import React from 'react';
import PropTypes from 'prop-types';

import ArrowRight from '../../icons/arrow-right';

const ControlRight = ({changeSlide}) => (
  <div className="control-right">
    <ArrowRight changeSlide={changeSlide} />
  </div>
);

ControlRight.propTypes = {
  changeSlide: PropTypes.func.isRequired
};

export default ControlRight;
