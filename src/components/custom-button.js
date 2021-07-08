import React from 'react';
import PropTypes from 'prop-types';
import {variantOptions} from '../utils';

export default function CustomButton({children, variant, size, ...otherProps}) {
  return (
    <button type="button" className={`btn btn--${size} ${variant}`} {...otherProps}>
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(variantOptions).isRequired,
  size: PropTypes.oneOf(['lg', 'md', 'sm']).isRequired
};
