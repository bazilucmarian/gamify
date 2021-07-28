import React, {useEffect, useState} from 'react';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import Button from '../../components/button';

function ShopPageAdmin() {
  const [allShopItems, setAllShopItems] = useState([]);

  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, []);

  return (
    <>
      <ShopSection title="Shop" shopItems={allShopItems} isAdmin />
      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm">
          Add new
        </Button>
      </div>
    </>
  );
}

export default ShopPageAdmin;
