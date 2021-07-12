import React from 'react';
import PropTypes from 'prop-types';

export default function Button({children, variant, color, size, ...otherProps}) {
  return (
    <button type="button" className={`btn btn--${size} ${color} ${variant}`} {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'fourth']),
  variant: PropTypes.oneOf([
    'outlined-primary',
    'outlined-secondary',
    'outlined-tertiary',
    'outlined-fourth',
    'contained-primary',
    'contained-secondary',
    'contained-tertiary',
    'contained-fourth'
  ]),
  size: PropTypes.oneOf(['lg', 'md', 'sm'])
};
Button.defaultProps = {
  variant: '',
  color: 'outlined-secondary',
  size: 'md'
};
