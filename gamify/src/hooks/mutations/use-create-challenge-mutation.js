import {useMutation, useQueryClient} from 'react-query';
import {toast} from 'react-toastify';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const useCreateChallengeMutation = user => {
  const queryClient = useQueryClient();

  async function createChallenge(challengeData) {
    try {
      return await api.post(`/api/challenges`, challengeData, getJWTHeader(user));
    } catch (error) {
      return error;
    }
  }

  return useMutation(createChallenge, {
    onSuccess: data => {
      queryClient.invalidateQueries(queryKeys.allChallenges);
      toast.success(data.message);
    }
  });
};

export default useCreateChallengeMutation;
