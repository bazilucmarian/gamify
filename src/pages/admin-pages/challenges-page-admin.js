import React, {useEffect, useState} from 'react';

import ChallengesSection from '../../components/challenges-section';
import {updateStateForAdminChallenges} from '../../reducers';
import {addNewChallenge, getAllChallenges} from '../../services/services';

const challengeTest = {
  title: 'test title',
  xp: 100,
  credits: 20,
  id: 100,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
};

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

    const newChallengeAdded = await addNewChallenge(challengeTest);
    setAllChallenges([newChallengeAdded, ...allChallenges]);
  };

  const handleUpdateChallenge = async (challengeId, operation) => {
    const newChallengesUpdated = await updateStateForAdminChallenges(allChallenges, challengeId, null, operation);
    setAllChallenges(newChallengesUpdated);
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
