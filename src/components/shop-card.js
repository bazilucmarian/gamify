/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Placeholder from '../assets/imgs/placeholder.png';

import Badge from './badge';
import ButtonContainerShopUser from './button-container-shop-user';
import ButtonContainerAdmin from './button-container-admin';

const ShopCard = ({shopItem, isAdmin, onUpdateShopItems}) => {
  const history = useHistory();

  const {
    title,
    id,
    description,
    credits,
    quantity,
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
            <ButtonContainerAdmin onClick={onUpdateShopItems} />
          ) : (
            <ButtonContainerShopUser onUpdateShopItems={onUpdateShopItems} credits={credits} quantity={quantity} />
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
    id: PropTypes.number
  }).isRequired,
  onUpdateShopItems: PropTypes.func
};

ShopCard.defaultProps = {
  isAdmin: false,
  onUpdateShopItems: () => {}
};

export default ShopCard;
