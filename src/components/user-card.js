import React from 'react';
import PropTypes from 'prop-types';

function UserCard({avatar, userName, jobTitle}) {
  return (
    <div className="card">
      <div className="card__avatar">
        <img className="card__img" src={avatar} alt="Profile" />
      </div>

      <div className="card__title">
        <div className="card__name">{userName}</div>
        {jobTitle && <div className="card__job">{jobTitle}</div>}
      </div>
    </div>
  );
}

UserCard.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string,
  jobTitle: PropTypes.string
};

UserCard.defaultProps = {
  avatar: '',
  userName: 'John Doe',
  jobTitle: ''
};

export default UserCard;
