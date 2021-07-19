import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ChallengesSection from '../../components/challenges-section';
import EmptyPlaceholder from '../../components/empty-placeholder';
import {getInProgressOrCompletedChallenges} from '../../services/services';
import {changeStatusRequest} from '../../services/services-utils';

function OverviewPage({isAdmin, loggedInUserId}) {
  const [inProgressOrPendingChallenges, setInProgressOrPendingChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);

  const handleChangeStatus = async (challengeId, newStatus, userId = loggedInUserId, operation) => {
    const newUpdatedState = await changeStatusRequest(
      inProgressOrPendingChallenges,
      challengeId,
      newStatus,
      userId,
      operation
    );
    setInProgressOrPendingChallenges(newUpdatedState);
  };

  useEffect(() => {
    const getUserChallenges = async () => {
      const getFilteredUserChallenges = await getInProgressOrCompletedChallenges(loggedInUserId);
      setInProgressOrPendingChallenges(getFilteredUserChallenges.inProgressChallenges);
      setCompletedChallenges(getFilteredUserChallenges.completedChallenges);
    };

    getUserChallenges();
  }, [loggedInUserId]);

  if (inProgressOrPendingChallenges.length === 0 && completedChallenges.length === 0) return <EmptyPlaceholder />;
  return (
    <div className="home-page">
      <ChallengesSection
        title="In progress Challenges"
        filteredChallenges={inProgressOrPendingChallenges}
        handleChangeStatus={handleChangeStatus}
        isAdmin={isAdmin}
        isScrollable
      />
      <ChallengesSection
        title="Completed Challenges"
        filteredChallenges={completedChallenges}
        handleChangeStatus={handleChangeStatus}
        isAdmin={isAdmin}
        isScrollable
      />
    </div>
  );
}

OverviewPage.propTypes = {
  isAdmin: PropTypes.bool,
  loggedInUserId: PropTypes.number.isRequired
};

OverviewPage.defaultProps = {
  isAdmin: false
};

export default OverviewPage;
