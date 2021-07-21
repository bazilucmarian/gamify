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
    const challenge = {
      title: 'test title',
      xp: 100,
      credits: 20,
      id: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
    };

    const newChallengeAdded = await addNewChallenge(challenge);
    setAllChallenges([newChallengeAdded, ...allChallenges]);
  };

  const handleUpdateChallenge = async (challengeId, operation) => {
    const updatedFields = {
      title: 'test test',
      xp: 299,
      credits: 1999,
      description: 'Updated Description'
    };
    switch (operation) {
      case 'DELETE':
        {
          const {message} = await deleteChallenge(challengeId);
          if (message.includes('Success')) {
            const filteredChallenges = allChallenges.filter(challenge => challenge.id !== challengeId);
            setAllChallenges(filteredChallenges);
          }
        }
        break;
      case 'EDIT':
        {
          const updatedChallenge = await editChallenge(updatedFields, challengeId);
          const filteredChallenges = allChallenges.map(challenge =>
            challenge.id === updatedChallenge.id ? updatedChallenge : challenge
          );
          setAllChallenges(filteredChallenges);
        }

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
