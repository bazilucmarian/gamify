/* eslint-disable no-return-await */
import {useQuery} from 'react-query';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

const limit = 6;
export default function useAvailableChallenges(user, currentPage) {
  async function getAvailableChallenges() {
    return await api.get(`/user-challenges/available?_page=${currentPage}&_limit=${limit}`, getJWTHeader(user));
  }

  return useQuery([queryKeys.availableChallenges, currentPage], getAvailableChallenges, {
    keepPreviousData: true
  });
}
