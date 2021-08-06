/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';

import CloseIcon from '../../icons/close-icon';
import Slider from '../../components/slider/slider';
import Button from '../../components/button';
import {getSingleShopItem} from '../../services/services';
import {updateStatePurchasedShopItems} from '../../reducers';

function SingleProduct({loggedInUser, forceUpdate}) {
  const [shopItem, setShopItem] = useState({});
  const {images, title, description, credits} = shopItem;

  const {id: idParam} = useParams();
  const history = useHistory();

  const handleClose = () => {
    history.push('/shop');
  };

  const handleAddToShoppingList = async operation => {
    const {message} = await updateStatePurchasedShopItems(shopItem, loggedInUser?.id, operation);
    if (message.includes('Success')) {
      alert('Success Added');
      forceUpdate();
    } else {
      alert(message);
    }
  };

  useEffect(() => {
    const getShopItem = async () => {
      const [shopItemResponse] = await getSingleShopItem(idParam);
      setShopItem(shopItemResponse);
    };
    getShopItem();
  }, [idParam]);

  return (
    <div className="single-shopItem">
      <div className="single-shopItem__left">
        <Slider images={images} />
      </div>
      <div className="single-shopItem__right">
        <div className="single-shopItem__close">
          <CloseIcon onClick={handleClose} />
        </div>
        <div className="single-shopItem__details">
          <h1>{title}</h1>
          <p className="single-shopItem__p1">{description}</p>
          <Button
            color="secondary"
            variant="contained-secondary"
            size="lg"
            onClick={() => handleAddToShoppingList('ADD_TO_SHOPPING_LIST')}
          >
            {`Buy - ${credits} Credits`}
          </Button>
        </div>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    job: PropTypes.string,
    profilePic: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number,
    role: PropTypes.string
  }).isRequired,
  forceUpdate: PropTypes.func.isRequired
};

export default SingleProduct;
