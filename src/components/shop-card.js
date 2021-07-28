import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../assets/imgs/placeholder.png';

import Button from './button';

const ShopCard = ({shopItem, isAdmin}) => {
  const {
    title,
    description1,
    credits,
    images: [{imageUrl} = {}]
  } = shopItem || {};

  return (
    <div className="shop-card">
      <div className="shop-card__content ">
        <div className="shop-card__top">
          <div className="shop-card__img">
            <img src={imageUrl || Placeholder} alt={title} />
          </div>
        </div>
        <div className="shop-card__middle">
          <p className="shop-card__title">{title}</p>
          <p className="shop-card__description">{description1}</p>
        </div>

        <div className="shop-card__bottom">
          {isAdmin ? (
            <>
              <Button color="secondary" variant="outlined-secondary" size="sm">
                Edit
              </Button>
              <Button color="secondary" variant="contained-secondary" size="md">
                Delete
              </Button>
            </>
          ) : (
            <Button color="secondary" size="lg" variant="contained-secondary">
              {`Buy - ${credits} Credits`}
            </Button>
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
    description1: PropTypes.string,
    description2: PropTypes.string,
    credits: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string
      })
    ),
    id: PropTypes.number
  }).isRequired
};

ShopCard.defaultProps = {
  isAdmin: false
};

export default ShopCard;