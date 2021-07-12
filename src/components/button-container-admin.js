import React from 'react';
import Button from './button';

export default function ButtonContainerAdmin({type}) {
  const renderAdminButtons = actionType => {
    let buttonGroup = null;
    switch (actionType) {
      case 'validation':
        buttonGroup = (
          <>
            <Button color="fourth" variant="outlined-fourth" size="sm">
              Deny
            </Button>
            <Button color="tertiary" variant="contained-tertiary" size="md">
              Validate
            </Button>
          </>
        );
        break;

      default:
        buttonGroup = (
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
    return buttonGroup;
  };
  return renderAdminButtons(type);
}
