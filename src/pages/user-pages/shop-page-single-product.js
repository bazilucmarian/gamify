import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import CloseIcon from '../../icons/close-icon';
import Slider from '../../components/slider/slider';
import Button from '../../components/button';
import {getSingleShopItem} from '../../services/services';

function SingleProduct() {
  const [shopItem, setShopItem] = useState({});
  const {images, title, description} = shopItem;

  const {id: idParam} = useParams();
  const history = useHistory();

  const handleClose = () => {
    history.push('/shop');
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
          <Button color="secondary" variant="contained-secondary" size="lg">
            Buy - 50 Credits
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
