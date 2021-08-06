import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {updateStatePurchasedShopItems} from '../../reducers';
import {getAllShopItems} from '../../services/services';
import ShopSection from '../../components/shop-section';
import useToast from '../../hooks/use-toast';
import Toast from '../../components/toast/toast';
import CloseIcon from '../../icons/close-icon';

function ShopPage({loggedInUser, forceUpdate}) {
  const [allShopItems, setAllShopItems] = useState([]);

  const {openToast, closeToast, isActive, message} = useToast();

  const handleUpdateShopItems = async (shopItem, operation) => {
    const {message: messageResponse} = await updateStatePurchasedShopItems(shopItem, loggedInUser.id, operation);
    if (messageResponse.includes('Success')) {
      openToast(`${messageResponse} ✅🛒`);
      forceUpdate();
    } else {
      openToast(`⛔⛔${messageResponse}`);
    }
  };

  useEffect(() => {
    (async () => {
      const shopItems = await getAllShopItems();
      setAllShopItems(shopItems);
    })();
  }, [loggedInUser.credits, loggedInUser.id]);

  return (
    <>
      <ShopSection title="Shop" shopItems={allShopItems} handleUpdateShopItems={handleUpdateShopItems} />
      <Toast isActive={isActive}>
        <Toast.Header>
          <span>Notification</span>
          <CloseIcon onClick={closeToast} />
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </>
  );
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
  }).isRequired,
  forceUpdate: PropTypes.func.isRequired
};

export default ShopPage;
