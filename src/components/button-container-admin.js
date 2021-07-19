/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import {statusDictionary} from '../utils';

function ButtonContainerAdmin({status, onClick, challengeId}) {
  return status === 'inPending' ? (
    <>
      <Button
        color="fourth"
        variant="outlined-fourth"
        size="sm"
        onClick={() => onClick(statusDictionary.denied, 'DELETE')}
      >
        Deny
      </Button>
      <Button
        color="tertiary"
        variant="contained-tertiary"
        size="md"
        onClick={() => onClick(statusDictionary.validated, 'DELETE')}
      >
        Validate
      </Button>
    </>
  ) : (
    <>
      <Button color="secondary" variant="outlined-secondary" size="sm">
        Edit
      </Button>
      <Button color="secondary" variant="contained-secondary" size="md" onClick={() => onClick(challengeId)}>
        Delete
      </Button>
    </>
  );
}

ButtonContainerAdmin.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  challengeId: PropTypes.number.isRequired
};

ButtonContainerAdmin.defaultProps = {
  status: undefined
};
export default ButtonContainerAdmin;
