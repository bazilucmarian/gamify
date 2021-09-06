import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const ButtonContainerShopUser = ({onClick, credits, quantity}) =>
  !quantity ? (
    <Button color="secondary" size="lg" variant="contained-secondary" onClick={onClick}>
      {`Buy - ${credits} Credits`}
    </Button>
  ) : (
    <Button color="secondary" size="lg" variant="outlined-fourth" onClick={onClick}>
      Remove
    </Button>
  );

ButtonContainerShopUser.propTypes = {
  onClick: PropTypes.func.isRequired,
  credits: PropTypes.number.isRequired,
  quantity: PropTypes.number
};

ButtonContainerShopUser.defaultProps = {
  quantity: 0
};

export default ButtonContainerShopUser;
