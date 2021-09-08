import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const useEditChallengeMutation = user => {
  const queryClient = useQueryClient();

  async function editChallenge(challengeData) {
    try {
      return await api.put(`/api/challenges/${challengeData.id}`, challengeData, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }

  return useMutation(editChallenge, {
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries(queryKeys.allChallenges);
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useEditChallengeMutation;
