import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Empty from '../assets/imgs/Empty.svg';

import Button from './button';

function EmptyPlaceholder({message, pathRedirect}) {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(pathRedirect);
  };

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
        {pathRedirect && (
          <Button color="secondary" variant="outlined-secondary" size="lg" onClick={handleRedirect}>
            Go to available challenges ➡
          </Button>
        )}
      </div>
    </div>
  );
}

EmptyPlaceholder.propTypes = {
  message: PropTypes.string,
  pathRedirect: PropTypes.string
};
EmptyPlaceholder.defaultProps = {
  message: '',
  pathRedirect: ''
};

export default EmptyPlaceholder;
