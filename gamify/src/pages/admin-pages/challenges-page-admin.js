import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import ChallengesSection from '../../components/challenges-section';
import useModal from '../../hooks/use-modal';
import ChallengesModal from '../../components/challenges-modal';
import EmptyPlaceholder from '../../components/empty-placeholder';
import useAllChallenges from '../../hooks/queries/use-all-challenges';
import Pagination from '../../components/pagination';
import ChallengeCard from '../../components/challenge-card';
import useCreateChallengeMutation from '../../hooks/mutations/use-create-challenge-mutation';
import useEditChallengeMutation from '../../hooks/mutations/use-edit-challenge-mutation';
import useDeleteChallengeMutation from '../../hooks/mutations/use-delete-challenge-mutation';
import {emptyMessage} from '../../constants/messages';

function ChallengesPageAdmin({user}) {
  const {isOpen, hideModal, showModal} = useModal();

  const [currentChallenge, setCurrentChallenge] = useState(null);

  const location = useLocation();
  const currentPage = Number(new URLSearchParams(location.search).get('page'));

  // query: get all challenges paginated
  const {
    data,
    isLoading: isLoadingGetChallenges,
    isError: isErrorGetChallenges,
    error
  } = useAllChallenges(user, currentPage);

  // create new challenge mutation
  const {mutate: handleAddNewChallenge, isLoading: isLoadingCreateChallenge} = useCreateChallengeMutation(user);

  // edit  challenge mutation
  const {mutate: handleEditChallenge, isLoading: isLoadingEditChallenge} = useEditChallengeMutation(user);

  // delete challenge mutation
  const {mutate: handleDeleteChallenge} = useDeleteChallengeMutation(user);

  const handleUpdateChallenge = challenge => operation => {
    if (challenge && operation === 'EDIT') {
      setCurrentChallenge(challenge);
      showModal();
    } else if (challenge && operation === 'DELETE') {
      handleDeleteChallenge(challenge);
    }
  };

  const handleOnCreate = () => {
    showModal();
    setCurrentChallenge(null);
  };

  useEffect(() => {
    if (isLoadingCreateChallenge || isLoadingEditChallenge) {
      hideModal();
    }
  }, [hideModal, isLoadingCreateChallenge, isLoadingEditChallenge]);

  if (isLoadingGetChallenges) {
    return null;
  }
  if (isErrorGetChallenges) {
    return <EmptyPlaceholder message={error.response.data.message} />;
  }
  if (!data.totalAvailable) {
    return <EmptyPlaceholder message={emptyMessage.challengesPage} />;
  }
  return (
    <>
      <ChallengesSection title="Challenges" hasData={data.allChallenges.length}>
        {data.allChallenges.map(challenge => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            isAdmin
            onUpdateChallenge={handleUpdateChallenge(challenge)}
          />
        ))}
      </ChallengesSection>
      <Pagination page={currentPage} itemsLength={data.totalAvailable} path="/admin/challenges" />

      <ChallengesModal
        isOpen={isOpen}
        hide={hideModal}
        currentChallenge={currentChallenge}
        handleAddNewChallenge={handleAddNewChallenge}
        handleEditChallenge={handleEditChallenge}
      />

      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm-1" onClick={handleOnCreate}>
          Add new
        </Button>
      </div>
    </>
  );
}

ChallengesPageAdmin.propTypes = {
  user: PropTypes.object.isRequired
};
export default ChallengesPageAdmin;
