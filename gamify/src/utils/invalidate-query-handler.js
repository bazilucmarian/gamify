import {queryKeys} from '../react-query/constants';

import {statusDictionary} from './status-dictionary';

export const invalidateQueryHandler = (status, queryClient) => {
  switch (status) {
    case statusDictionary.inProgress:
      queryClient.invalidateQueries(queryKeys.availableChallenges);
      queryClient.invalidateQueries(queryKeys.progressOrCompletedChallenges, {refetchInactive: true});
      break;
    case statusDictionary.available:
      queryClient.invalidateQueries(queryKeys.progressOrCompletedChallenges);
      queryClient.invalidateQueries(queryKeys.availableChallenges, {refetchInactive: true});
      break;

    case statusDictionary.inPending:
      queryClient.invalidateQueries(queryKeys.progressOrCompletedChallenges);
      queryClient.invalidateQueries(queryKeys.validationChallenges, {refetchInactive: true});
      break;

    case statusDictionary.validated:
    case statusDictionary.denied:
      queryClient.invalidateQueries(queryKeys.validationChallenges);
      queryClient.invalidateQueries(queryKeys.progressOrCompletedChallenges, {refetchInactive: true});
      break;

    default:
      break;
  }
};
