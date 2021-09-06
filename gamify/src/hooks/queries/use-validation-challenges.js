/* eslint-disable no-return-await */
import {useQuery} from 'react-query';

import {getJWTHeader} from '../../axios-instance';
import api from '../../components/api';
import {queryKeys} from '../../react-query/constants';

export default function useValidationChallenges(user) {
  async function getChallengesToValidate() {
    return await api.get('/user-challenges/validation', getJWTHeader(user));
  }

  return useQuery(queryKeys.validationChallenges, getChallengesToValidate);
}
