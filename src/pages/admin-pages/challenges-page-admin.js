import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ChallengesSection from '../../components/challenges-section';
import {deleteChallenge, getAllChallenges} from '../../services/services';

function ChallengesPageAdmin({isAdmin}) {
  const [allChallenges, setAllChallenges] = useState([]);

  useEffect(() => {
    const fetchAllChallengesList = async () => {
      const challenges = await getAllChallenges();
      setAllChallenges(challenges);
    };
    fetchAllChallengesList();
  }, []);

  const handleDeleteChallenge = async challengeId => {
    const filteredChallenges = await deleteChallenge(challengeId);
    setAllChallenges(filteredChallenges);
  };
  return (
    <ChallengesSection
      title="Challenges"
      filteredChallenges={allChallenges}
      handleDeleteChallenge={handleDeleteChallenge}
      isAdmin={isAdmin}
    />
  );
}

ChallengesPageAdmin.propTypes = {
  isAdmin: PropTypes.bool.isRequired
};

export default ChallengesPageAdmin;
