import React from 'react';
import PropTypes from 'prop-types';

function AvatarInitials({initials}) {
  return <div className="initials">{initials}</div>;
}

AvatarInitials.propTypes = {
  initials: PropTypes.string
};
AvatarInitials.defaultProps = {
  initials: 'DT'
};

export default AvatarInitials;
