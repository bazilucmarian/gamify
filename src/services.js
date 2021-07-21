import './mocks/fake-mocks';

export const getAvailableChallenges = async (userId, status) => {
  let data;
  try {
    const statusResponse = await fetch(`/user-challenges/${userId}/${status}`);
    data = await statusResponse.json();
  } catch (error) {
    console.error(error.message);
  }
  return data;
};

export const getInProgressAndCompletedChallenges = async userId => {
  let data;
  try {
    const statusResponse = await fetch(`/user-challenges/${userId}`);
    data = await statusResponse.json();
  } catch (error) {
    console.error(error.message);
  }
  return data;
};
