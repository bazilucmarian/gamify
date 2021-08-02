import React, {useEffect, useState} from 'react';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import Button from '../../components/button';
import ShopModal from '../../components/shop-modal';
import useModal from '../../hooks/use-modal';

function ShopPageAdmin() {
  const [allShopItems, setAllShopItems] = useState([]);

  const {isOpen, hideModal, showModal} = useModal();

  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, []);

  const handleOnCreate = () => {
    showModal();
  };

  return (
    <>
      <ShopSection title="Shop" shopItems={allShopItems} isAdmin />
      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm" onClick={handleOnCreate}>
          Add new
        </Button>
      </div>
      <ShopModal isOpen={isOpen} hide={hideModal} />
    </>
  );
}

export default ShopPageAdmin;
