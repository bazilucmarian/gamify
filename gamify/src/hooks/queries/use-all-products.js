/* eslint-disable no-return-await */
import {useInfiniteQuery} from 'react-query';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

export default function useInfiniteProducts(user) {
  async function getAllProducts({pageParam}) {
    return await api.get(
      `/shop?_page=${pageParam?.nextPage || 1}&_limit=${pageParam?.pageLimit || 6}`,
      getJWTHeader(user)
    );
  }

  return useInfiniteQuery(queryKeys.allProducts, getAllProducts, {
    getNextPageParam: lastPage => lastPage.next || undefined
  });
}
