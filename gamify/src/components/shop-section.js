import React from 'react';
import PropTypes from 'prop-types';

const ShopSection = ({title, isScrollable, children, hasData}) =>
  Boolean(hasData) && (
    <section className="shop-section">
      <h2 className="shop-section__title">{title}</h2>
      <div className={`shop-section__items shop-section__items--${isScrollable && 'scrollable'}`}>{children}</div>
    </section>
  );

ShopSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  hasData: PropTypes.number.isRequired,
  isScrollable: PropTypes.bool
};

ShopSection.defaultProps = {
  isScrollable: false
};

export default ShopSection;
