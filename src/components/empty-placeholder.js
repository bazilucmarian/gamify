import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Empty from '../assets/imgs/Empty.svg';

import Button from './button';

const EmptyPlaceholder = ({message}) => {
  const history = useHistory();

  if (!message) {
    return (
      <img
        style={{width: '100%', height: '100%'}}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"
        alt="placeholder"
      />
    );
  }
  return (
    <div className="empty-placeholder">
      <div className="empty-placeholder__content">
        <img className="empty-placeholder__image" src={Empty} alt="placeholder-img" />
        <p className="empty-placeholder__message">{message}</p>
        <Button color="secondary" variant="outlined-secondary" size="lg" onClick={() => history.push('/challenges')}>
          Go to available challenges ➡
        </Button>
      </div>
    </div>
  );
};

EmptyPlaceholder.propTypes = {
  message: PropTypes.string
};
EmptyPlaceholder.defaultProps = {
  message: ''
};

export default EmptyPlaceholder;
