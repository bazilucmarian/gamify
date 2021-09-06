import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {invalidateQueryHandler} from '../../utils/invalidate-query-handler';

const useStatusChangeMutation = user => {
  const queryClient = useQueryClient();

  async function handleChangeStatusCall({challengeId, userId, newStatus}) {
    try {
      return await api.put(
        `/user-challenges/${challengeId}/${userId}?newStatus=${newStatus}`,
        null,
        getJWTHeader(user)
      );
    } catch (error) {
      return error;
    }
  }

  return useMutation(handleChangeStatusCall, {
    onSuccess: ({message}, {newStatus}) => {
      invalidateQueryHandler(newStatus, queryClient);
      toast.success(message);
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useStatusChangeMutation;
