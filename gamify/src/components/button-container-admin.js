import React from 'react';
import PropTypes from 'prop-types';

import {statusDictionary} from '../utils';

import Button from './button';

function ButtonContainerAdmin({status, onValidate, onUpdateItem}) {
  return status === 'inPending' ? (
    <>
      <Button color="fourth" variant="outlined-fourth" size="sm" onClick={() => onValidate(statusDictionary.denied)}>
        Deny
      </Button>
      <Button
        color="tertiary"
        variant="contained-tertiary"
        size="md"
        onClick={() => onValidate(statusDictionary.validated)}
      >
        Validate
      </Button>
    </>
  ) : (
    <>
      <Button color="secondary" variant="outlined-secondary" size="sm" onClick={() => onUpdateItem('DELETE')}>
        Delete
      </Button>
      <Button color="secondary" variant="contained-secondary" size="md" onClick={() => onUpdateItem('EDIT')}>
        Edit
      </Button>
    </>
  );
}

ButtonContainerAdmin.propTypes = {
  status: PropTypes.string,
  onValidate: PropTypes.func,
  onUpdateItem: PropTypes.func
};

ButtonContainerAdmin.defaultProps = {
  onValidate: PropTypes.func,
  onUpdateItem: PropTypes.func,
  status: ''
};
export default ButtonContainerAdmin;
