import React from 'react';
import PropTypes from 'prop-types';

import {statusDictionary} from '../utils';

import Button from './button';

function ButtonsContainerUser({status}) {
  switch (status) {
    case statusDictionary.inProgress:
      return (
        <>
          <Button color="secondary" variant="outlined-secondary" size="sm">
            Quit
          </Button>
          <Button color="secondary" variant="contained-secondary" size="md">
            Complete
          </Button>
        </>
      );

    case statusDictionary.inPending:
      return (
        <Button color="primary" size="lg" disabled>
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
        <Button color="secondary" variant="contained-secondary" size="lg">
          Enroll
        </Button>
      );
  }
}

ButtonsContainerUser.propTypes = {
  status: PropTypes.string.isRequired
};
export default ButtonsContainerUser;
