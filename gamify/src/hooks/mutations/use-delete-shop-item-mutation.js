import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const useDeleteShopItemMutation = user => {
  const queryClient = useQueryClient();

  async function deleteShopItem(shopItem) {
    try {
      return await api.delete(`/api/shop/${shopItem.id}`, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }

  return useMutation(deleteShopItem, {
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries(queryKeys.allProducts);
      queryClient.invalidateQueries(queryKeys.user, {refetchInactive: true});
    },

    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useDeleteShopItemMutation;
