const statusDictionary = {
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

const shopItems = [
  {
    id: 1,
    images: [
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/25344/25343964/images/res_078b9a9407015da56782daa40ae21486.jpg?width=450&height=450&hash=93F2D33C5136C49D1E84E029C52A0E9B',
        name: 'Iphone 11 pro-1'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/25344/25343964/images/res_c8673f9e618622c6687711aab6eb0c98.jpg?width=450&height=450&hash=33725BE424C110EE70E1B255D70E501C',
        name: 'Iphone 11 pro-2'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/25344/25343964/images/res_4722ab5f91ef91cea115eede08ddc4ff.jpg?width=450&height=450&hash=106F9D774074A7B4BD1DEE3C62EBF2B0',
        name: 'Iphone 11 pro-3'
      }
    ],
    title: 'Brand new iPhone 11 Pro',
    description1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    description2:
      '* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non, imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, se  euismod mauris euismod nec.',
    credits: 50
  },
  {
    id: 2,
    images: [],
    title: 'Shop item 2',
    description: 'Shop item 2 description',
    credits: 80
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
    challenges: []
  },
  {
    userId: 9232,
    challenges: []
  }
];

export {challengesList, users, userChallengesData, statusDictionary, shopItems};
