import React from 'react';
import PropTypes from 'prop-types';

import {getInitials} from '../utils';

function Avatar({imageSrc, userName}) {
  const initials = getInitials(userName);
  return imageSrc ? (
    <img className="avatar-img" src={imageSrc} alt="Profile" />
  ) : (
    <div className="avatar-initials">{initials}</div>
  );
}

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  userName: PropTypes.string
};
Avatar.defaultProps = {
  imageSrc: '',
  userName: ''
};

export default Avatar;
