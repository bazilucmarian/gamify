import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import {statusDictionary} from '../utils';

export default function ButtonsContainerUser({status}) {
  const renderUserButtons = statusType => {
    let buttonGroup = null;
    switch (statusType) {
      case statusDictionary.inProgress:
        buttonGroup = (
          <>
            <Button color="secondary" variant="outlined-secondary" size="sm">
              Quit
            </Button>
            <Button color="secondary" variant="contained-secondary" size="md">
              Complete
            </Button>
          </>
        );
        break;
      case statusDictionary.inPending:
        buttonGroup = (
          <Button color="primary" size="lg" disabled>
            Pending ...
          </Button>
        );
        break;
      case statusDictionary.validated:
        buttonGroup = (
          <Button color="tertiary" size="lg" disabled>
            Validated
          </Button>
        );
        break;
      case statusDictionary.denied:
        buttonGroup = (
          <Button color="fourth" size="lg" disabled>
            Denied
          </Button>
        );
        break;

      default:
        buttonGroup = (
          <Button color="secondary" variant="contained-secondary" size="lg">
            Enroll
          </Button>
        );
    }
    return buttonGroup;
  };

  return renderUserButtons(status);
}

ButtonsContainerUser.propTypes = {
  status: PropTypes.string.isRequired
};
