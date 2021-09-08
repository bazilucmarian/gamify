import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';
import {getStoredUser} from '../../user-local-storage';
import {useUser} from '../use-user';

const useAddToShoppingCartMutation = user => {
  const queryClient = useQueryClient();
  const {updateUser} = useUser();
  const {token} = getStoredUser();

  async function handleAddToShoppingCart(shopItemId) {
    try {
      return await api.post(`/cart/${shopItemId}`, null, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }
  return useMutation(handleAddToShoppingCart, {
    onSuccess: data => {
      toast.success(data.message);
      updateUser({...data.newUserUpdated, token});
      queryClient.invalidateQueries(queryKeys.cart, {refetchInactive: true});
    },
    onError: error => {
      toast.warn(error.response.data.message);
    }
  });
};

export default useAddToShoppingCartMutation;
