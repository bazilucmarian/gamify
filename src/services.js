import './mocks/fake-mocks';

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
