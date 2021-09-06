import React from 'react';
import PropTypes from 'prop-types';

import ShopSection from '../../components/shop-section';
import EmptyPlaceholder from '../../components/empty-placeholder';
import ShopCard from '../../components/shop-card';
import LoadMore from '../../components/load-more';
import useAddToShoppingCartMutation from '../../hooks/mutations/use-add-to-shopping-cart';
import useInfiniteProducts from '../../hooks/queries/use-all-products';
import {emptyMessage} from '../../constants/messages';

function ShopPage({user}) {
  // mutation
  const {mutate: addToShoppingCartHandler} = useAddToShoppingCartMutation(user);

  // query
  const {data, isLoading, isError, error, fetchNextPage, isFetchingNextPage, hasNextPage} = useInfiniteProducts(user);

  if (isLoading) {
    return null;
  }
  if (isError) {
    return <EmptyPlaceholder message={error.response.data.message} />;
  }
  if (!data.pages.length) {
    return <EmptyPlaceholder message={emptyMessage.shopPage} />;
  }
  return (
    <>
      <ShopSection title="Shop" hasData={data.pages.length}>
        {data.pages.map(pageData =>
          pageData.products.map(shopItem => (
            <ShopCard
              key={shopItem.title}
              shopItem={shopItem}
              isAdmin={user.role === 'Admin'}
              onAddToShoppingCart={() => addToShoppingCartHandler(shopItem.id)}
            />
          ))
        )}
      </ShopSection>
      <LoadMore hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} onFetchNextPage={fetchNextPage} />
    </>
  );
}

ShopPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default ShopPage;
