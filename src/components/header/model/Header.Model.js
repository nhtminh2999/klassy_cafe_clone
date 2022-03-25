import logo from '../../../assets/images/klassy-logo.png';

export const headerModel = {
  logo,
  homePagePath: '/',
  navigation: [
    {
      id: 0,
      title: 'Home',
      path: '#home'
    },
    {
      id: 1,
      title: 'About',
      path: '#about-us'
    },
    {
      id: 2,
      title: 'Menu',
      path: '#menu'
    },
    {
      id: 3,
      title: 'Chefs',
      path: '#chefs'
    },
    {
      id: 4,
      title: 'Features',
      path: '#features',
      sub: [
        {
          id: 0,
          title: 'Features 1',
          path: '/',
        },
        {
          id: 1,
          title: 'Features 2',
          path: '/',
        },
        {
          id: 2,
          title: 'Features 3',
          path: '/',
        },
        {
          id: 3,
          title: 'Features 4',
          path: '/',
        },
      ]
    },
    {
      id: 5,
      title: 'Contact Us',
      path: '#contact-us',
    },
  ]
};
