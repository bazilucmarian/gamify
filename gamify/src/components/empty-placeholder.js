import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Empty from '../assets/imgs/Empty.svg';
import NoImage from '../assets/imgs/no-image.png';

import Button from './button';

function EmptyPlaceholder({message, pathRedirect, image}) {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(pathRedirect);
  };

  if (!message) {
    return <img className="empty-placeholder__not-available" src={NoImage} alt="placeholder" />;
  }
  return (
    <div className="empty-placeholder">
      <div className="empty-placeholder__content">
        <img className="empty-placeholder__image" src={image} alt="placeholder-img" />
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
  pathRedirect: PropTypes.string,
  image: PropTypes.string
};
EmptyPlaceholder.defaultProps = {
  message: '',
  pathRedirect: '',
  image: Empty
};

export default EmptyPlaceholder;
