import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const useEditShopItemMutation = user => {
  const queryClient = useQueryClient();

  async function editShopItem(shopItemData) {
    try {
      return await api.put(`/api/shop/${shopItemData.id}`, shopItemData, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }

  return useMutation(editShopItem, {
    onSuccess: data => {
      queryClient.invalidateQueries(queryKeys.allProducts);
      toast.success(data.message);
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useEditShopItemMutation;
