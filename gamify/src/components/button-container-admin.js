import React from 'react';
import PropTypes from 'prop-types';

import {statusDictionary} from '../utils';

import Button from './button';

function ButtonContainerAdmin({status, onClick}) {
  return status === 'inPending' ? (
    <>
      <Button
        color="fourth"
        variant="outlined-fourth"
        size="sm"
        onClick={() => onClick('DELETE', statusDictionary.denied)}
      >
        Deny
      </Button>
      <Button
        color="tertiary"
        variant="contained-tertiary"
        size="md"
        onClick={() => onClick('DELETE', statusDictionary.validated)}
      >
        Validate
      </Button>
    </>
  ) : (
    <>
      <Button color="secondary" variant="outlined-secondary" size="sm" onClick={() => onClick('DELETE')}>
        Delete
      </Button>
      <Button color="secondary" variant="contained-secondary" size="md" onClick={() => onClick('EDIT')}>
        Edit
      </Button>
    </>
  );
}

ButtonContainerAdmin.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

ButtonContainerAdmin.defaultProps = {
  status: ''
};
export default ButtonContainerAdmin;
