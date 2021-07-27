import React, {useEffect, useState} from 'react';

import ShopSection from '../../components/shop-section';
import {getAllShopItems} from '../../services/services';

function ShopPage() {
  const [allShopItems, setAllShopItems] = useState([]);

  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, []);

  return <ShopSection title="Shop" shopItems={allShopItems} />;
}

export default ShopPage;
