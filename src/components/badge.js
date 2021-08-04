import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({quantity}) => (
  <span className="badge-overlay strip">
    {quantity} {quantity === 1 ? 'item' : 'items'}
  </span>
);

Badge.propTypes = {
  quantity: PropTypes.number.isRequired
};
export default Badge;
