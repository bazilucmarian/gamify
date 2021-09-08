import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const useCreteShopItemMutation = user => {
  const queryClient = useQueryClient();

  async function createNewShopItem(shopItemData) {
    try {
      return await api.post(`/api/shop`, shopItemData, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }

  return useMutation(createNewShopItem, {
    onSuccess: data => {
      queryClient.invalidateQueries(queryKeys.allProducts);
      toast.success(data.message);
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};
export default useCreteShopItemMutation;
