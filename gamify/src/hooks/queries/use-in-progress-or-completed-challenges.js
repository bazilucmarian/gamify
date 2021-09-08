/* eslint-disable no-return-await */
import {useQuery} from 'react-query';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

export default function useInProgressOrCompletedChallenges(user) {
  async function getInProgressOrCompletedChallenges() {
    return await api.get('/api/user-challenges/progress-completed', getJWTHeader(user));
  }

  return useQuery(queryKeys.progressOrCompletedChallenges, getInProgressOrCompletedChallenges);
}
