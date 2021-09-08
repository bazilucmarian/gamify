/* eslint-disable no-return-await */
import {useQuery} from 'react-query';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

export default function useShoppingCart(user) {
  async function getAllProducts() {
    return await api.get('/cart', getJWTHeader(user));
  }

  return useQuery(queryKeys.cart, getAllProducts);
}
