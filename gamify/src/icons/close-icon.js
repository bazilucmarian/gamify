import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({onClick, size}) => (
  <svg
    onClick={onClick}
    cursor="pointer"
    className={`close-icon close-icon--${size}`}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.727836 3.27213L3.55626 0.443707L31.8405 28.728L29.0121 31.5564L0.727836 3.27213Z" fill="#171717" />
    <path d="M3.55637 31.5563L0.727938 28.7279L29.0122 0.443637L31.8406 3.27206L3.55637 31.5563Z" fill="#171717" />
  </svg>
);

CloseIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['SM', 'XL'])
};

CloseIcon.defaultProps = {
  size: 'SM'
};

export default CloseIcon;
