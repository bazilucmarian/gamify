import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AvatarInitials from './avatar-initials';
import {getInitials} from '../utils';

function UserCard({avatar, userName, jobTitle}) {
  const [initials, setInitials] = useState('');

  const {newInitials} = getInitials(userName);

  useEffect(() => {
    setInitials(newInitials);
  }, [newInitials, userName]);
  return (
    <div className="card">
      <div className="card__avatar">
        {avatar ? <img className="card__img" src={avatar} alt="Profile" /> : <AvatarInitials initials={initials} />}
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
  userName: 'Daniel Toma',
  jobTitle: 'Programmer'
};

export default UserCard;
