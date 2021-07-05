import React from 'react';
import PropTypes from 'prop-types';

function Avatar({imageSrc, initials}) {
  return imageSrc ? (
    <img className="avatar-img" src={imageSrc} alt="Profile" />
  ) : (
    <div className="avatar-initials">{initials}</div>
  );
}

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  initials: PropTypes.string
};
Avatar.defaultProps = {
  imageSrc: '',
  initials: 'uk'
};

export default Avatar;
