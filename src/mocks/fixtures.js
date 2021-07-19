export const statusDictionary = {
  available: 'Available',
  inProgress: 'inProgress',
  inPending: 'inPending',
  validated: 'Validated',
  denied: 'Denied',
  all: 'All'
};

const challengesList = [
  {
    title: 'Challenge no. 1',
    xp: 15,
    credits: 50,
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 2',
    xp: 30,
    credits: 70,
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 3',
    xp: 45,
    credits: 75,
    id: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 4',
    xp: 45,
    credits: 75,
    id: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 5',
    xp: 45,
    credits: 75,
    id: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 6',
    xp: 45,
    credits: 75,
    id: 6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 7',
    xp: 45,
    credits: 75,
    id: 7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 8',
    xp: 45,
    credits: 75,
    id: 8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 9',
    xp: 45,
    credits: 75,
    id: 9,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.'
  },
  {
    title: 'Challenge no. 10',
    xp: 45,
    credits: 75,
    id: 10,
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

const userChallengesData = [
  {
    userId: 123,
    challenges: [
      {
        challengeId: 4,
        status: statusDictionary.inProgress
      },
      {
        challengeId: 2,
        status: statusDictionary.validated
      },
      {
        challengeId: 5,
        status: statusDictionary.denied
      },
      {
        challengeId: 8,
        status: statusDictionary.inPending
      }
    ]
  },
  {
    userId: 9232,
    challenges: []
  }
];

export {challengesList, users, userChallengesData};
