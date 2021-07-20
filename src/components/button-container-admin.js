import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

function ButtonContainerAdmin({type}) {
  return type === 'validation' ? (
    <>
      <Button color="fourth" variant="outlined-fourth" size="sm">
        Deny
      </Button>
      <Button color="tertiary" variant="contained-tertiary" size="md">
        Validate
      </Button>
    </>
  ) : (
    <>
      <Button color="secondary" variant="outlined-secondary" size="sm">
        Edit
      </Button>
      <Button color="secondary" variant="contained-secondary" size="md">
        Delete
      </Button>
    </>
  );
}

ButtonContainerAdmin.propTypes = {
  type: PropTypes.string
};

ButtonContainerAdmin.defaultProps = {
  type: 'validation'
};
export default ButtonContainerAdmin;
