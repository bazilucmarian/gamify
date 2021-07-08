import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({children, variant, handleClick, width}) => (
  <button type="button" className={`btn ${variant}`} onClick={handleClick} style={{width}}>
    {children || 'button'}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  width: PropTypes.string
};

CustomButton.defaultProps = {
  width: '100%'
};

export default CustomButton;
