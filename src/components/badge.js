import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({quantity}) => (
  <span className="badge-overlay strip">{`${quantity} item${quantity > 1 ? 's' : ''}`}</span>
);

Badge.propTypes = {
  quantity: PropTypes.number.isRequired
};
export default Badge;
