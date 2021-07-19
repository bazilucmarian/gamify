import '../mocks/fake-mocks';

export const getAvailableChallenges = async (userId, status) => {
  let data;
  try {
    const statusResponse = await fetch(`/user-challenges/${userId}/${status}`);
    data = await statusResponse.json();
  } catch (e) {
    console.error(e.message);
  }
  return data;
};

export const getInProgressOrCompletedChallenges = async userId => {
  try {
    const userChallengesResponse = await fetch(`/user-challenges/${userId}`);
    const userChallenges = await userChallengesResponse.json();
    return userChallenges;
  } catch (e) {
    return e.message;
  }
};

export const updateChallengeStatus = async (challengeId, newStatus) => {
  try {
    const response = await fetch('/user-challenges', {
      method: 'PUT',
      body: {challengeId, status: newStatus}
    });

    const messageResponse = await response.json();
    const {message} = messageResponse;
    return message;
  } catch (e) {
    return e.message;
  }
};

// admin

export const getAllChallenges = async () => {
  try {
    const allChallenges = await fetch(`/challenges`);
    return await allChallenges.json();
  } catch (e) {
    return e.message;
  }
};

export const getAllUsersChallengesByStatus = async status => {
  try {
    const challengesResponse = await fetch(`/challenges/${status}`);

    return await challengesResponse.json();
  } catch (e) {
    return e.message;
  }
};

export const deleteChallenge = async challengeId => {
  try {
    const response = await fetch(`/challenges/${challengeId}`, {
      method: 'DELETE',
      body: {challengeId}
    });

    const responseData = await response.json();

    return responseData;
  } catch (e) {
    return e.message;
  }
};
