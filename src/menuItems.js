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
            ],
          },
        ],
      },
      {
        title: 'credit cards',
        url: 'seo',
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
    ],
  },
];
