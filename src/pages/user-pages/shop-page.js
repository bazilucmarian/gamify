/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {updateStatePurchasedShopItems} from '../../reducers';
import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';

function ShopPage({loggedInUser, setLoggedInUser, forceUpdate}) {
  const [allShopItems, setAllShopItems] = useState([]);

  const handleUpdateShopItems = async (shopItem, operation) => {
    const {message} = await updateStatePurchasedShopItems(shopItem, loggedInUser.id, operation);
    if (message.includes('Success')) {
      alert('Success Added');
      forceUpdate();

      // setLoggedInUser(prevState => ({...prevState, credits: prevState.credits - shopItem.credits}));
    } else {
      alert(message);
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
