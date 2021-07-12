/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from './button';

const RedirectMessage = () => {
  const history = useHistory();
  return (
    <div className="redirect-message">
      <div className="redirect-message__content">
        <div className="redirect-message__icon">😢</div>
        <h2 className="redirect-message__title">No challenges</h2>
        <p className="redirect-message__message">You have no challenge in progress or completed.</p>
        <Button color="secondary" variant="outlined-secondary" size="lg" onClick={() => history.push('/challenges')}>
          Got to available challenges ➡
        </Button>
      </div>
    </div>
  );
};

export default RedirectMessage;
