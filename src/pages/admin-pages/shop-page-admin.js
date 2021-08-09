import React, {useEffect, useState} from 'react';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import Button from '../../components/button';
import useModal from '../../hooks/use-modal';
import {updateStateShopAdmin} from '../../reducers';
import ShopModal from '../../components/shop-modal';
import EmptyPlaceholder from '../../components/empty-placeholder';

function ShopPageAdmin() {
  const [allShopItems, setAllShopItems] = useState([]);
  const [currentShopItem, setCurrentShopItem] = useState();

  const {isOpen, hideModal, showModal} = useModal();

  const handleUpdateShopItems = async (shopItem, operation) => {
    if (shopItem && operation === 'EDIT') {
      setCurrentShopItem(shopItem);
      showModal();
    } else {
      const newShopItems = await updateStateShopAdmin(allShopItems, shopItem, operation);
      setAllShopItems(newShopItems);
    }
  };

  const handleAddNewShopItem = async newShopItem => {
    const newShopItems = await updateStateShopAdmin(allShopItems, newShopItem, 'CREATE');
    setAllShopItems(newShopItems);
    hideModal();
  };

  const handleEditShopItem = async newUpdatedShopItem => {
    const newShopItems = await updateStateShopAdmin(allShopItems, newUpdatedShopItem, 'EDIT');
    setAllShopItems(newShopItems);
    hideModal();
  };

  const handleOnCreate = () => {
    showModal();
    setCurrentShopItem();
  };

  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, []);

  if (!allShopItems.length) {
    return (
      <>
        <EmptyPlaceholder message="Oups...you have to add some products, for that press add new button" />;
        <div className="add-button">
          <Button color="secondary" variant="contained-secondary" size="sm-1" onClick={handleOnCreate}>
            Add new
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <ShopSection title="Shop" shopItems={allShopItems} isAdmin handleUpdateShopItems={handleUpdateShopItems} />
      <ShopModal
        isOpen={isOpen}
        hide={hideModal}
        currentShopItem={currentShopItem}
        handleEditShopItem={handleEditShopItem}
        handleAddNewShopItem={handleAddNewShopItem}
      />
      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm-1" onClick={handleOnCreate}>
          Add new
        </Button>
      </div>
    </>
  );
}

export default ShopPageAdmin;
