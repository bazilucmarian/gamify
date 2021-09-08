import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';
import {getStoredUser} from '../../user-local-storage';
import {useUser} from '../use-user';

const useRemoveFromShoppingCartMutation = user => {
  const queryClient = useQueryClient();
  const {updateUser} = useUser();
  const {token} = getStoredUser();

  async function handleRemoveFromShoppingCart(shopItemId) {
    try {
      return await api.delete(`/api/cart/${shopItemId}`, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }
  return useMutation(handleRemoveFromShoppingCart, {
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries(queryKeys.cart);
      updateUser({...data.newUserUpdated, token});
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useRemoveFromShoppingCartMutation;
