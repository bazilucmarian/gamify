import React, {useEffect, useState} from 'react';

import ChallengesSection from '../../components/challenges-section';
import {getAllShopItems} from '../../services/services';

function ShopPage() {
  const [allShopItems, setAllShopItems] = useState([]);
  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, []);

  return <ChallengesSection title="Shop" section="shop" shopItems={allShopItems} />;
}

export default ShopPage;
