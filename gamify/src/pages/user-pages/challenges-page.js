import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';

import ChallengesSection from '../../components/challenges-section';
import useAvailableChallenges from '../../hooks/queries/use-available-challenges';
import useStatusChangeMutation from '../../hooks/mutations/use-status-change-mutation';
import EmptyPlaceholder from '../../components/empty-placeholder';
import Pagination from '../../components/pagination';
import ChallengeCard from '../../components/challenge-card';
import {emptyMessage} from '../../constants/messages';

function ChallengesPage({user}) {
  const location = useLocation();
  const currentPage = Number(new URLSearchParams(location.search).get('page'));

  // mutation
  const {mutate: handleChangeStatus} = useStatusChangeMutation(user);
  const changeStatusHandler = challenge => newStatus => {
    handleChangeStatus({challengeId: challenge.id, userId: challenge.userId, newStatus});
  };

  // query
  const {
    data: availableChallengesData,
    isLoading: loadingGetAvailableChallenges,
    isError: isErrorGetAvailableChallenges,
    error
  } = useAvailableChallenges(user, currentPage);

  if (loadingGetAvailableChallenges) {
    return null;
  }

  if (isErrorGetAvailableChallenges) {
    return <EmptyPlaceholder message={error.response.data.message} />;
  }
  if (!availableChallengesData.challenges.length) {
    return <EmptyPlaceholder message={emptyMessage.challengesPage} />;
  }
  return (
    <>
      <ChallengesSection title="Available Challenges" hasData={availableChallengesData.challenges.length}>
        {availableChallengesData.challenges.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} onChangeStatus={changeStatusHandler(challenge)} />
        ))}
      </ChallengesSection>
      <Pagination page={currentPage} itemsLength={availableChallengesData.totalAvailable} path="/challenges" />
    </>
  );
}

ChallengesPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default ChallengesPage;
