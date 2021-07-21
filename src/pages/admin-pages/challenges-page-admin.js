import React, {useEffect, useState} from 'react';

import ChallengesSection from '../../components/challenges-section';
import {addNewChallenge, deleteChallenge, editChallenge, getAllChallenges} from '../../services/services';

function ChallengesPageAdmin() {
  const [allChallenges, setAllChallenges] = useState([]);

  useEffect(() => {
    const fetchAllChallengesList = async () => {
      const challenges = await getAllChallenges();
      setAllChallenges(challenges);
    };
    fetchAllChallengesList();
  }, []);

  const handleAddNewChallenge = async () => {
    //  TO DO : we need challenge as param for this function
    const newChallenge = {
      title: 'test title',
      xp: 100,
      credits: 20,
      id: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
    };

    const newChallenges = await addNewChallenge(newChallenge);
    setAllChallenges(newChallenges);
  };

  const handleUpdateChallenge = async (challengeId, operation) => {
    let newUpdatedChallenges = [];
    const updatedFields = {
      title: 'test test',
      xp: 299,
      credits: 1999,
      description: 'Updated Description'
    };
    switch (operation) {
      case 'DELETE':
        newUpdatedChallenges = await deleteChallenge(challengeId);
        setAllChallenges(newUpdatedChallenges);

        break;
      case 'EDIT':
        newUpdatedChallenges = await editChallenge(updatedFields, challengeId);
        setAllChallenges(newUpdatedChallenges);
        break;

      default:
        break;
    }
  };
  return (
    <ChallengesSection
      title="Challenges"
      filteredChallenges={allChallenges}
      isAdmin
      handleAddNewChallenge={handleAddNewChallenge}
      handleUpdateChallenge={handleUpdateChallenge}
    />
  );
}

export default ChallengesPageAdmin;
