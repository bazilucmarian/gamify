export const statusDictionary = {
  available: 'Available',
  inProgress: 'inProgress',
  inPending: 'inPending',
  validated: 'Validated',
  denied: 'Denied'
};

const challengesList = [
  {
    title: 'Do a byte-sized learning talk',
    xp: 15,
    credits: 50,
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Heckaton participation',
    xp: 30,
    credits: 70,
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'workshop organization',
    xp: 45,
    credits: 75,
    id: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'workshop organization',
    xp: 45,
    credits: 75,
    id: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  }
];

const users = [
  {
    id: 123,
    name: 'Daniel Toma',
    job: 'Programmer',
    profilePic: '',
    credits: 10,
    xp: 100,
    role: 'user'
  },
  {
    id: 9232,
    name: 'Baziluc Marian',
    job: 'Designer',
    profilePic: '',
    credits: 0,
    xp: 0,
    role: 'admin'
  }
];

const userChallengesDummy = [
  {
    userId: 123,
    challenges: challengesList.map(challenge => ({
      challengeId: challenge.id,
      status: statusDictionary.available
    }))
  },
  {
    userId: 9232,
    challenges: challengesList.map(challenge => ({
      challengeId: challenge.id,
      status: statusDictionary.available
    }))
  }
];

export {challengesList, users, userChallengesDummy};
