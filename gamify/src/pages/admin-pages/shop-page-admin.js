import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ShopSection from '../../components/shop-section';
import Button from '../../components/button';
import useModal from '../../hooks/use-modal';
import ShopModal from '../../components/shop-modal';
import EmptyPlaceholder from '../../components/empty-placeholder';
import ShopCard from '../../components/shop-card';
import LoadMore from '../../components/load-more';
import useInfiniteProducts from '../../hooks/queries/use-all-products';
import useCreteShopItemMutation from '../../hooks/mutations/use-create-shop-item-mutation';
import useEditShopItemMutation from '../../hooks/mutations/use-edit-shop-item-mutation';
import useDeleteShopItemMutation from '../../hooks/mutations/use-delete-shop-item-mutation';
import {emptyMessage} from '../../constants/messages';

function ShopPageAdmin({user}) {
  const [currentShopItem, setCurrentShopItem] = useState();

  const {isOpen, hideModal, showModal} = useModal();

  // query for get all products using infiniteQuery
  const {data, isLoading, isError, error, isFetchingNextPage, hasNextPage, fetchNextPage} = useInfiniteProducts(user);

  // create new shop item mutation
  const {mutate: handleAddNewShopItem, isLoading: isLoadingCreateShopItem} = useCreteShopItemMutation(user);

  // edit shop item mutation
  const {mutate: handleEditShopItem, isLoading: isLoadingEditShopItem} = useEditShopItemMutation(user);

  // delete shop item mutation
  const {mutate: handleDeleteShopItem} = useDeleteShopItemMutation(user);

  // actions for modal
  const handleUpdateShopItem = shopItem => operation => {
    if (shopItem && operation === 'EDIT') {
      setCurrentShopItem(shopItem);
      showModal();
    } else if (shopItem && operation === 'DELETE') {
      handleDeleteShopItem(shopItem);
    }
  };

  useEffect(() => {
    if (isLoadingCreateShopItem || isLoadingEditShopItem) {
      hideModal();
    }
  }, [hideModal, isLoadingCreateShopItem, isLoadingEditShopItem]);

  if (isLoading) {
    return null;
  }
  if (isError) {
    return <EmptyPlaceholder message={error.response.data.message} />;
  }

  if (!data.pages.length) {
    return (
      <>
        <EmptyPlaceholder message={emptyMessage.shopPageAdmin} />;
        <div className="add-button">
          <Button color="secondary" variant="contained-secondary" size="sm-1" onClick={showModal}>
            Add new
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <ShopSection title="Shop">
        {data.pages.map(pageData =>
          pageData.products.map(shopItem => (
            <ShopCard
              key={shopItem.title}
              shopItem={shopItem}
              isAdmin={user.role === 'Admin'}
              onUpdateShopItem={handleUpdateShopItem(shopItem)}
            />
          ))
        )}
      </ShopSection>
      <LoadMore hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} onFetchNextPage={fetchNextPage} />

      <ShopModal
        isOpen={isOpen}
        hide={hideModal}
        currentShopItem={currentShopItem}
        handleEditShopItem={handleEditShopItem}
        handleAddNewShopItem={handleAddNewShopItem}
      />

      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm-1" onClick={showModal}>
          Add new
        </Button>
      </div>
    </>
  );
}
ShopPageAdmin.propTypes = {
  user: PropTypes.object.isRequired
};

export default ShopPageAdmin;
