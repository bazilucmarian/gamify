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
          'https://s13emagst.akamaized.net/products/25344/25343964/images/res_078b9a9407015da56782daa40ae21486.jpg',
        name: 'Iphone 11 pro-1'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/25344/25343964/images/res_c8673f9e618622c6687711aab6eb0c98.jpg',
        name: 'Iphone 11 pro-2'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/25344/25343964/images/res_4722ab5f91ef91cea115eede08ddc4ff.jpg',
        name: 'Iphone 11 pro-3'
      }
    ],
    title: 'Brand new iPhone 11 Pro',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    credits: 50
  },
  {
    id: 2,
    images: [
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/33874/33873212/images/res_dd54d4f0422dd99cc2e14171aee622f4.jpg',
        name: 'macbook pro-13-1'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/33874/33873212/images/res_ecf4a2558e7220137c5ccdb378039571.jpg',

        name: 'macbook pro-13-2'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/33874/33873212/images/res_42bab67904457ff0aca6159e1ad606c0.jpg',
        name: 'macbook pro-13-3'
      }
    ],
    title: 'Macbook Pro 13',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    credits: 55
  },
  {
    id: 3,
    images: [
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/32508/32507401/images/res_da1e61f14ea4b1110e0fb1d59ac0f9ec.jpg',

        name: 'consola-xbox-1'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/32508/32507401/images/res_ba609a0557480835f6365c7cf8e47ddf.jpg',

        name: 'consola-xbox-2'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/32508/32507401/images/res_62cf769315963d419141b4d7dd13e25a.jpg',
        name: 'consola-xbox-3'
      }
    ],
    title: 'XBOX',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    credits: 40
  },
  {
    id: 4,
    images: [
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/19093/19092700/images/res_d280d3a101f793000645137905a48cc5.jpg',

        name: 'gaming-glasses-1'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/19093/19092700/images/res_cddbdddaeef12baeac74f15aa7088343.jpg',

        name: 'gaming-glasses-2'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/19093/19092700/images/res_27333c8a02edd4888d3d8493eecb31b3.jpg',
        name: 'gaming-glasses-3'
      }
    ],
    title: 'Gaming glasses',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    credits: 25
  },
  {
    id: 5,
    images: [
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/35534/35533684/images/res_72d9570a3f64235d0581e2653f806485.jpg',

        name: 'ultrawide-monitor-1'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/35534/35533684/images/res_98bf287498cade00ff8c70f5ef16fd7d.jpg',

        name: 'ultrawide-monitor-2'
      },
      {
        imageUrl:
          'https://s13emagst.akamaized.net/products/35534/35533684/images/res_62084a95732724bb236dbcbd8654ae78.jpg',
        name: 'ultrawide-monitor-3'
      }
    ],
    title: 'Ultrawide monitor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    credits: 80
  },
  {
    id: 6,
    images: [],
    title: 'Shop item 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non,imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, invarius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.',
    credits: 80
  }
];

const users = [
  {
    id: 123,
    name: 'Daniel Toma',
    job: 'Programmer',
    profilePic: '',
    credits: 20,
    xp: 25,
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

const userShopData = [
  {
    userId: 123,
    shopItems: []
  },
  {
    userId: 9232,
    shopItems: []
  }
];

export {challengesList, users, userChallengesData, statusDictionary, shopItems, userShopData};
