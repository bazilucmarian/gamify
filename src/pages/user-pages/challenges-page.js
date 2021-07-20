import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import {getAvailableChallenges} from '../../services';
import {statusDictionary} from '../../mocks/fixtures';

function ChallengesPage({loggedInUser}) {
  const [availableChallenges, setAvailableChallenges] = useState([]);

  useEffect(() => {
    (async () => {
      const challenges = await getAvailableChallenges(loggedInUser.id, statusDictionary.available);
      setAvailableChallenges(challenges);
    })();
  }, [loggedInUser]);

  return (
    <ChallengesSection
      title="Available Challenges"
      filteredChallenges={availableChallenges}
      loggedInUser={loggedInUser}
    />
  );
}

ChallengesPage.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    job: PropTypes.string,
    profilePic: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number
  }).isRequired
};

export default ChallengesPage;
