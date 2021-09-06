import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';

import CloseIcon from '../../icons/close-icon';
import Slider from '../../components/slider/slider';
import Button from '../../components/button';
import useSingleProduct from '../../hooks/queries/use-single-product';
import EmptyPlaceholder from '../../components/empty-placeholder';
import useAddToShoppingCartMutation from '../../hooks/mutations/use-add-to-shopping-cart';

function SingleProduct({user}) {
  const {productId} = useParams();
  const history = useHistory();
  const isAdmin = user.role === 'Admin';

  // mutation
  const {mutate: addToShoppingCartHandler} = useAddToShoppingCartMutation(user);

  // query
  const {data: productDetails, isLoading, isError, error} = useSingleProduct(user, productId);

  const handleClose = () => {
    if (isAdmin) {
      history.push('/admin/shop');
    } else {
      history.push('/shop');
    }
  };

  if (isLoading) {
    return null;
  }
  if (isError) {
    return <EmptyPlaceholder message={error.response.data.message} />;
  }

  return (
    <div className="single-shopItem">
      <div className="single-shopItem__left">
        <Slider images={productDetails.images} />
      </div>
      <div className="single-shopItem__right">
        <div className="single-shopItem__close">
          <CloseIcon onClick={handleClose} size="XL" />
        </div>
        <div className="single-shopItem__details">
          <h1>{productDetails.title}</h1>
          <p className="single-shopItem__p1">{productDetails.description}</p>
          {!isAdmin && (
            <Button
              color="secondary"
              variant="contained-secondary"
              size="lg"
              onClick={() => addToShoppingCartHandler(productId)}
            >
              {`Buy - ${productDetails.credits} Credits`}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  user: PropTypes.object.isRequired
};

export default SingleProduct;
