/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import CloseIcon from '../../icons/close-icon';
import Slider from '../../components/slider/slider';
import Button from '../../components/button';
import {getSingleShopItem} from '../../services/services';
import {updateStatePurchasedShopItems} from '../../reducers';

function SingleProduct({loggedInUser, setLoggedInUser}) {
  const [shopItem, setShopItem] = useState({});
  const {images, title, description, credits} = shopItem;

  const {id: idParam} = useParams();
  const history = useHistory();

  const handleClose = () => {
    history.push('/shop');
  };

  const handleAddToShoppingList = async operation => {
    const {message} = await updateStatePurchasedShopItems(shopItem, loggedInUser?.id, operation);
    console.log(message);
    if (message.includes('Success')) {
      alert('Success Added');
      setLoggedInUser(prevState => ({...prevState, credits: prevState.credits - shopItem.credits}));
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

export default SingleProduct;
