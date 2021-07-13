import React from 'react';
import Button from './button';

function ButtonContainerAdmin({type}) {
  const renderAdminButtons = actionType => {
    switch (actionType) {
      case 'validation':
        return (
          <>
            <Button color="fourth" variant="outlined-fourth" size="sm">
              Deny
            </Button>
            <Button color="tertiary" variant="contained-tertiary" size="md">
              Validate
            </Button>
          </>
        );

      default:
        return (
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
  };
  return renderAdminButtons(type);
}
export default ButtonContainerAdmin;
