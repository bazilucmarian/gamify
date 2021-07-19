import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ChallengesSection from '../../components/challenges-section';
import {changeStatusRequest} from '../../services/services-utils';
import {statusDictionary} from '../../utils';
import {getAllUsersChallengesByStatus} from '../../services/services';

function ValidationPageAdmin({loggedInUserId, isAdmin}) {
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

  return (
    <ChallengesSection
      title="Challenges to be validated"
      filteredChallenges={inPendingChallenges}
      handleChangeStatus={handleChangeStatus}
      isAdmin={isAdmin}
      typeAdminButtons="validation"
    />
  );
}

ValidationPageAdmin.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  loggedInUserId: PropTypes.number.isRequired
};

export default ValidationPageAdmin;
