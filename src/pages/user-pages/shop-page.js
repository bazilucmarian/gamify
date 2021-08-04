import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import {updateStatePurchasedShopItems} from '../../reducers';

function ShopPage({loggedInUser}) {
  const [allShopItems, setAllShopItems] = useState([]);
  const [userCredits, setUserCredits] = useState(loggedInUser.credits || 0);

  const handleUpdateShopItems = async (shopItem, operation) => {
    if (userCredits < shopItem.credits) {
      // eslint-disable-next-line no-alert
      alert(`You need more ${shopItem.credits - userCredits} credits to buy this product`);
    } else {
      setUserCredits(prevState => prevState - shopItem.credits);
      await updateStatePurchasedShopItems(shopItem, loggedInUser.id, operation);
    }
  };

  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, [loggedInUser.credits, loggedInUser.id]);

  return <ShopSection title="Shop" shopItems={allShopItems} handleUpdateShopItems={handleUpdateShopItems} />;
}

ShopPage.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    job: PropTypes.string,
    profilePic: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number,
    role: PropTypes.string
  }).isRequired
};

export default ShopPage;
