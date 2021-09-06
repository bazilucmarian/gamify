export const getStatus = (challenges, idChallenge) => {
  const { status } = challenges.find(
    ({ challengeId }) => challengeId === idChallenge.toString()
  );
  return status;
};

export const filterChallengesByStatuses = (challenges, statuses) =>
  challenges.filter(({ status }) => statuses.includes(status));

export const getUserChallengesIds = (userChallenges) =>
  userChallenges.map(({ challengeId }) => challengeId);

export const getChallengesWithStatus = (
  allChallengesFromDatabase,
  userChallenges,
  userChallengesIds,
  userId
) =>
  allChallengesFromDatabase
    .map((challenge) =>
      userChallengesIds.includes(challenge._id)
        ? {
            ...challenge._doc,
            status: getStatus(userChallenges, challenge._id),
            id: challenge._id,
            userId,
          }
        : null
    )
    .filter(Boolean);
