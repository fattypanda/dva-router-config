export default [
  {
    path: '/',
    exact: true,
    component: () => import('../IndexPage'),
  },
  {
    path: '/person',
    component: () => import('./_layout'),
    models: () => [
      import('src/models/person'),
    ],
    routes: [
      {
        path: '/person/redirect',
        exact: true,
        redirect: '/person/home',
      },
      {
        path: '/person/home',
        exact: true,
        component: () => import('./Home'),
        models: () => [
          import('src/models/person/home'),
          import('src/models/person/dict'),
        ],
      },
      {
        path: '/person/mine',
        exact: true,
        component: () => import('./Mine'),
        models: () => [
          import('src/models/person/mine'),
          import('src/models/person/dict'),
        ],
      },
    ]
  }
];
