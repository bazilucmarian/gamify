/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {useHistory} from 'react-router-dom';

import Empty from '../assets/imgs/Empty.svg';

import Button from './button';

const EmptyPlaceholder = () => {
  const history = useHistory();
  return (
    <div className="empty-placeholder">
      <div className="empty-placeholder__content">
        <img className="empty-placeholder__image" src={Empty} alt="placeholder-img" />
        <p className="empty-placeholder__message">Sorry... you have no challenge in progress or completed.</p>
        <Button color="secondary" variant="outlined-secondary" size="lg" onClick={() => history.push('/challenges')}>
          Go to available challenges ➡
        </Button>
      </div>
    </div>
  );
};

export default EmptyPlaceholder;
