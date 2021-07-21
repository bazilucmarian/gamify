import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import EmptyPlaceholder from '../../components/empty-placeholder';
import {getInProgressAndCompletedChallenges} from '../../services';

function OverviewPage({isAdmin, loggedInUser}) {
  const [challengesInProgress, setChallengesInProgress] = useState([]);
  const [challengesCompleted, setChallengesCompleted] = useState([]);

  useEffect(() => {
    (async () => {
      const {completedChallenges, inProgressChallenges} = await getInProgressAndCompletedChallenges(loggedInUser.id);
      setChallengesInProgress(inProgressChallenges);
      setChallengesCompleted(completedChallenges);
    })();
  }, []);

  if (challengesInProgress.length === 0 && challengesCompleted.length === 0) {
    return <EmptyPlaceholder />;
  }
  return (
    <div className="home-page">
      <ChallengesSection
        title="In progress Challenges"
        filteredChallenges={challengesInProgress}
        isAdmin={isAdmin}
        isScrollable
      />
      <ChallengesSection
        title="Completed Challenges"
        filteredChallenges={challengesCompleted}
        isAdmin={isAdmin}
        isScrollable
      />
    </div>
  );
}

OverviewPage.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    job: PropTypes.string,
    profilePic: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number
  }).isRequired,
  isAdmin: PropTypes.bool
};

OverviewPage.defaultProps = {
  isAdmin: false
};

export default OverviewPage;
