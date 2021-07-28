import React, {useEffect, useState} from 'react';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';

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
