import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Placeholder from '../assets/imgs/placeholder.png';

import Button from './button';

function ShopCard({shopItem}) {
  const history = useHistory();

  const {
    title,
    description1,
    credits,
    id,
    images: [{imageUrl, name} = {}]
  } = shopItem || {};

  const handleRedirect = () => {
    history.push(`/shop/${id}`);
  };

  return (
    <div className="shop-card">
      <div className="shop-card__content ">
        <div className="shop-card__top">
          <div className="shop-card__img">
            <img src={imageUrl || Placeholder} alt={name || title} onClick={handleRedirect} aria-hidden="true" />
          </div>
        </div>
        <div className="shop-card__middle">
          <p className="shop-card__title">{shopItem?.title}</p>
          <p className="shop-card__description">{description1}</p>
        </div>

        <div className="shop-card__bottom">
          <Button color="secondary" size="lg" variant="contained-secondary">
            {`Buy - ${credits} Credits`}
          </Button>
        </div>
      </div>
    </div>
  );
}

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
