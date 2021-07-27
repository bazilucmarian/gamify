import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../assets/imgs/placeholder.png';

import Button from './button';

const ShopCard = ({shopItem}) => (
  <div className="shop-card">
    <div className="shop-card__content ">
      <div className="shop-card__top">
        <div className="shop-card__img">
          <img src={shopItem.img ? shopItem.img : Placeholder} alt={shopItem.title} />
        </div>
      </div>
      <div className="shop-card__middle">
        <p className="shop-card__title">{shopItem?.title}</p>
        <p className="shop-card__description">{shopItem?.description}</p>
      </div>

      <div className="shop-card__bottom">
        <Button color="secondary" size="lg" variant="contained-secondary">
          {`Buy - ${shopItem?.credits} Credits`}
        </Button>
      </div>
    </div>
  </div>
);
ShopCard.propTypes = {
  shopItem: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    credits: PropTypes.number,
    img: PropTypes.string,
    id: PropTypes.number
  }).isRequired
};

export default ShopCard;
