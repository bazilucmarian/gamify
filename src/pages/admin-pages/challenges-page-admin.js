import React, {useEffect, useState} from 'react';

import Button from '../../components/button';
import ChallengesSection from '../../components/challenges-section';
import {updateStateForAdminChallenges} from '../../reducers';
import {getAllChallenges} from '../../services/services';
import useModal from '../../hooks/use-modal';
import ChallengesModal from '../../components/challenges-modal';

function ChallengesPageAdmin() {
  const [allChallenges, setAllChallenges] = useState([]);
  const [currentChallenge, setCurrentChallenge] = useState(null);

  const {toggle, isOpen} = useModal();

  useEffect(() => {
    const fetchAllChallengesList = async () => {
      const challenges = await getAllChallenges();
      setAllChallenges(challenges);
    };
    fetchAllChallengesList();
  }, []);

  const handleAddNewChallenge = async challenge => {
    const newChallenges = await updateStateForAdminChallenges(allChallenges, null, challenge, 'CREATE');
    setAllChallenges(newChallenges);
  };

  const handleEditChallenge = async newUpdatedChallenge => {
    const newChallengesUpdated = await updateStateForAdminChallenges(
      allChallenges,
      newUpdatedChallenge.id,
      newUpdatedChallenge,
      'EDIT'
    );

    setAllChallenges(newChallengesUpdated);
  };

  const handleUpdateChallenge = async (challengeId, operation, challenge) => {
    if (challenge && operation === 'EDIT') {
      setCurrentChallenge(challenge);
      toggle();
      return;
    }
    const newChallengesUpdated = await updateStateForAdminChallenges(allChallenges, challengeId, challenge, operation);
    setAllChallenges(newChallengesUpdated);
  };

  const handleOnCreate = () => {
    toggle();
    setCurrentChallenge(null);
  };
  return (
    <>
      <ChallengesSection
        title="Challenges"
        filteredChallenges={allChallenges}
        isAdmin
        handleUpdateChallenge={handleUpdateChallenge}
      />
      <div className="add-button">
        <Button color="secondary" variant="contained-secondary" size="sm" onClick={handleOnCreate}>
          Add new
        </Button>
      </div>

      {isOpen && (
        <ChallengesModal
          isOpen={isOpen}
          hide={toggle}
          currentChallenge={currentChallenge}
          handleAddNewChallenge={handleAddNewChallenge}
          handleEditChallenge={handleEditChallenge}
        />
      )}
    </>
  );
}

export default ChallengesPageAdmin;
