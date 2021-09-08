import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const useDeleteChallengeMutation = user => {
  const queryClient = useQueryClient();

  async function deleteChallenge(challengeData) {
    try {
      return await api.delete(`/challenges/${challengeData.id}`, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }

  return useMutation(deleteChallenge, {
    onSuccess: data => {
      queryClient.invalidateQueries(queryKeys.allChallenges);
      toast.success(data.message);
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useDeleteChallengeMutation;
