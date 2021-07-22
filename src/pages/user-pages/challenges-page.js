import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import {getAvailableChallenges} from '../../services/services';
import {statusDictionary} from '../../mocks/fixtures';
import {changeStatusRequest} from '../../services/services-utils';

function ChallengesPage({loggedInUserId}) {
  const [availableChallenges, setAvailableChallenges] = useState([]);

  const handleChangeStatus = async (challengeId, newStatus, userId = loggedInUserId, operation) => {
    const newUpdatedState = await changeStatusRequest(availableChallenges, challengeId, newStatus, userId, operation);
    setAvailableChallenges(newUpdatedState);
  };

  useEffect(() => {
    (async () => {
      const challenges = await getAvailableChallenges(loggedInUserId, statusDictionary.available);
      setAvailableChallenges(challenges);
    })();
  }, [loggedInUserId]);

  return (
    <ChallengesSection
      title="Available Challenges"
      filteredChallenges={availableChallenges}
      handleChangeStatus={handleChangeStatus}
    />
  );
}

ChallengesPage.propTypes = {
  loggedInUserId: PropTypes.number.isRequired
};

export default ChallengesPage;
