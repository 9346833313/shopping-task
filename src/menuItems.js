
      export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'home delivery',
        url: 'delivery',
      },
      {
        title: 'cash on delivery',
        url: 'cash',
        submenu: [
          {
            title: 'cash on delivery',
            url: 'products',
          },
          {
            title: 'phonpe wallet',
            url: 'our-values',
          },
          {
            title: 'creditcards',
            submenu: [
              {
                title: 'icici card',
                url: 'cards',
              },
              {
                title: 'HDFC card',
                url: 'cash on delivery',
              },
              {
                title: 'andhra bank card',
                url: 'andhra',
              },
              {
                title: 'Yes card',
                url: 'yes',
              },
            ],
          },
        ],
      },
      {
        title: 'credit cards',
        url: 'credit',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'good products',
        url: 'products',
      },
      {
        title: '5 star rating',
        url: 'our-values',
      },
      {
        title: 'quality items',
        url: 'our-values',
      },
      {
        title: 'reasonbul prices',
        url: 'our-values',
      },
      {
        title: 'safe delivery',
        url: 'our-values',
      },
    ],
  },
];
