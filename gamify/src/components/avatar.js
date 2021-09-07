import React from 'react';
import PropTypes from 'prop-types';

import {getInitials} from '../utils';

function Avatar({imageSrc, userName}) {
  return imageSrc ? (
    <img className="avatar-img" src={imageSrc} alt="Profile" />
  ) : (
    <div className="avatar-initials">{getInitials(userName)}</div>
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
