import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const ButtonContainerShopUser = ({onUpdateShopItems, credits, quantity}) =>
  !quantity && (
    <Button
      color="secondary"
      size="lg"
      variant="contained-secondary"
      onClick={() => onUpdateShopItems('ADD_TO_SHOPPING_LIST')}
    >
      {`Buy - ${credits} Credits`}
    </Button>
  );

ButtonContainerShopUser.propTypes = {
  onUpdateShopItems: PropTypes.func.isRequired,
  credits: PropTypes.number.isRequired,
  quantity: PropTypes.number
};

ButtonContainerShopUser.defaultProps = {
  quantity: 0
};

export default ButtonContainerShopUser;
