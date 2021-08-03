import React, {useEffect, useState} from 'react';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import Button from '../../components/button';
// import ShopModal from '../../components/shop-modal';
import useModal from '../../hooks/use-modal';
import {updateStateShopAdmin} from '../../reducers';
import ShopModal from '../../components/shop-modal';

function ShopPageAdmin() {
  const [allShopItems, setAllShopItems] = useState([]);
  const [currentShopItem, setCurrentShopItem] = useState(null);

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

  const handleOnCreate = () => {
    showModal();
    setCurrentShopItem(null);
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
      <ShopModal isOpen={isOpen} hide={hideModal} currentShopItem={currentShopItem} />
    </>
  );
}

export default ShopPageAdmin;
