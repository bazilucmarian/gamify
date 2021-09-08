/* eslint-disable no-return-await */
import {useQuery} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

function useSingleProduct(user, productId) {
  async function getSingleProduct() {
    return await api.get(`/shop/${productId}`, getJWTHeader(user));
  }

  return useQuery([queryKeys.allProducts, productId], getSingleProduct, {
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
}

export default useSingleProduct;
