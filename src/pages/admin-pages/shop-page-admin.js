import React, {useEffect, useState} from 'react';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import Button from '../../components/button';
import useModal from '../../hooks/use-modal';
import {updateStateShopAdmin} from '../../reducers';
import ShopModal from '../../components/shop-modal';

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

  const handleEditShopItem = async newUpdatedShopItem => {
    const newShopItems = await updateStateShopAdmin(allShopItems, newUpdatedShopItem, 'EDIT');
    hideModal();
    setAllShopItems(newShopItems);
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

  return (
    <>
      <ShopSection title="Shop" shopItems={allShopItems} isAdmin handleUpdateShopItems={handleUpdateShopItems} />
      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm" onClick={handleOnCreate}>
          Add new
        </Button>
      </div>
      <ShopModal
        isOpen={isOpen}
        hide={hideModal}
        currentShopItem={currentShopItem}
        handleEditShopItem={handleEditShopItem}
        handleAddNewShopItem={() => {}}
      />
    </>
  );
}

export default ShopPageAdmin;
