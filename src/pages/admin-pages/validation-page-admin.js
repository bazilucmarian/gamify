import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import {changeStatusRequest} from '../../services/services-utils';
import {statusDictionary} from '../../utils';
import {getAllUsersChallengesByStatus} from '../../services/services';
import EmptyPlaceholder from '../../components/empty-placeholder';

function ValidationPageAdmin({loggedInUserId}) {
  const [inPendingChallenges, setInPendingChallenges] = useState([]);

  const handleChangeStatus = async (challengeId, newStatus, userId = loggedInUserId, operation) => {
    const newUpdatedState = await changeStatusRequest(inPendingChallenges, challengeId, newStatus, userId, operation);
    setInPendingChallenges(newUpdatedState);
  };

  useEffect(() => {
    const getInPendingChallenges = async () => {
      const challenges = await getAllUsersChallengesByStatus(statusDictionary.inPending);
      setInPendingChallenges(challenges);
    };
    getInPendingChallenges();
  }, []);

  if (!inPendingChallenges.length) {
    return <EmptyPlaceholder message="Oups... you have no challenge to validate." />;
  }

  return (
    <ChallengesSection
      title="Challenges to be validated"
      filteredChallenges={inPendingChallenges}
      handleChangeStatus={handleChangeStatus}
      isAdmin
    />
  );
}

ValidationPageAdmin.propTypes = {
  loggedInUserId: PropTypes.number.isRequired
};

export default ValidationPageAdmin;
