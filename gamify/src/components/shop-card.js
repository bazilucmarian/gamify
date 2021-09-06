import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Placeholder from '../assets/imgs/placeholder.png';

import Badge from './badge';
import ButtonContainerShopUser from './button-container-shop-user';
import ButtonContainerAdmin from './button-container-admin';

const ShopCard = ({shopItem, isAdmin, onAddToShoppingCart, onRemoveFromShoppingCart, onUpdateShopItem}) => {
  const history = useHistory();

  const {
    title,
    description,
    credits,
    quantity,
    id,
    images: [{imageUrl} = {}]
  } = shopItem || {};

  const handleRedirect = () => {
    history.push(`/shop/${id}`);
  };

  return (
    <div className="shop-card">
      <div className="shop-card__content ">
        <div className="shop-card__top">
          <div className="shop-card__img">
            <img src={imageUrl || Placeholder} alt={title} onClick={handleRedirect} aria-hidden="true" />
          </div>
        </div>
        <div className="shop-card__middle">
          <p className="shop-card__title">{title}</p>
          <p className="shop-card__description">{description}</p>
        </div>
        {quantity && <Badge quantity={quantity} />}

        <div className="shop-card__bottom">
          {isAdmin ? (
            <ButtonContainerAdmin onClick={onUpdateShopItem} onUpdateItem={onUpdateShopItem} />
          ) : (
            <ButtonContainerShopUser
              onClick={quantity ? onRemoveFromShoppingCart : onAddToShoppingCart}
              credits={credits}
              quantity={quantity}
            />
          )}
        </div>
      </div>
    </div>
  );
};
ShopCard.propTypes = {
  isAdmin: PropTypes.bool,
  shopItem: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    credits: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string
      })
    ),
    _id: PropTypes.string
  }).isRequired,
  onAddToShoppingCart: PropTypes.func,
  onRemoveFromShoppingCart: PropTypes.func,
  onUpdateShopItem: PropTypes.func
};

ShopCard.defaultProps = {
  isAdmin: false,
  onAddToShoppingCart: () => {},
  onUpdateShopItem: () => {},
  onRemoveFromShoppingCart: () => {}
};

export default ShopCard;
