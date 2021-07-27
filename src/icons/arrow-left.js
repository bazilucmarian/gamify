import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = ({changeSlide}) => (
  <svg
    onClick={() => changeSlide('PREVIOUS')}
    width="19"
    height="32"
    viewBox="0 0 19 32"
    transform="rotate(180)"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.727836 3.27216L3.55626 0.443737L18.8405 15.728L16.0121 18.5564L0.727836 3.27216Z" fill="#6A758D" />
    <path d="M3.55637 31.5564L0.727938 28.7279L16.0122 13.4437L18.8406 16.2721L3.55637 31.5564Z" fill="#6A758D" />
  </svg>
);

ArrowLeft.propTypes = {
  changeSlide: PropTypes.func.isRequired
};
export default ArrowLeft;
