import React from 'react';
import PropTypes from 'prop-types';

import ShopCard from './shop-card';

const ShopSection = ({title, isScrollable, shopItems, isAdmin, handleUpdateShopItems}) => {
  const handleOnClick = shopItem => operation => {
    handleUpdateShopItems(shopItem, operation);
  };

  if (!shopItems.length) {
    return null;
  }
  return (
    <section className="shop-section">
      <h2 className="shop-section__title">{title}</h2>
      <div className={`shop-section__items shop-section__items--${isScrollable && 'scrollable'}`}>
        {shopItems?.map(shopItem => (
          <ShopCard
            key={shopItem?.id}
            shopItem={shopItem}
            isAdmin={isAdmin}
            onUpdateShopItems={handleOnClick(shopItem)}
          />
        ))}
      </div>
    </section>
  );
};

ShopSection.propTypes = {
  title: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
  shopItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  isScrollable: PropTypes.bool,
  handleUpdateShopItems: PropTypes.func
};

ShopSection.defaultProps = {
  shopItems: [],
  isScrollable: false,
  isAdmin: false,
  handleUpdateShopItems: () => {}
};

export default ShopSection;
