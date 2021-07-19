import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import {statusDictionary} from '../utils';

function ButtonsContainerUser({status, onClick}) {
  switch (status) {
    case statusDictionary.inProgress:
      return (
        <>
          <Button
            color="secondary"
            variant="outlined-secondary"
            size="sm"
            onClick={() => onClick(statusDictionary.available, 'DELETE')}
          >
            Quit
          </Button>
          <Button
            color="secondary"
            variant="contained-secondary"
            size="md"
            onClick={() => onClick(statusDictionary.inPending, 'UPDATE')}
          >
            Complete
          </Button>
        </>
      );

    case statusDictionary.inPending:
      return (
        <Button size="lg" disabled>
          Pending ...
        </Button>
      );

    case statusDictionary.validated:
      return (
        <Button color="tertiary" size="lg" disabled>
          Validated
        </Button>
      );

    case statusDictionary.denied:
      return (
        <Button color="fourth" size="lg" disabled>
          Denied
        </Button>
      );

    default:
      return (
        <Button
          color="secondary"
          variant="contained-secondary"
          size="lg"
          onClick={() => onClick(statusDictionary.inProgress, 'DELETE')}
        >
          Enroll
        </Button>
      );
  }
}

ButtonsContainerUser.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

ButtonsContainerUser.defaultProps = {
  status: ''
};

export default ButtonsContainerUser;
