import React from 'react';
import {Link} from 'react-router-dom';

import {shopItems} from '../../mocks/fixtures';

function ShopPage() {
  return (
    <div>
      {shopItems.map(item => (
        <Link key={item.id} to={`/shop/${item.id}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default ShopPage;
