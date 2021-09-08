/* eslint-disable no-return-await */
import {useQuery} from 'react-query';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const limit = 6;

export default function useAllChallenges(user, currentPage) {
  async function getAllChallenges() {
    return await api.get(`/api/challenges/?_page=${currentPage}&_limit=${limit}`, getJWTHeader(user));
  }

  return useQuery([queryKeys.allChallenges, currentPage], getAllChallenges, {
    keepPreviousData: true
  });
}
