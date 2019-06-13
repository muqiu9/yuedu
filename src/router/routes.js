export default [
  {
    path: '/',
    component: () => import('../views/Main'),
    redirect: '/channel/1',
    children: [
      {
        name: 'channel',
        path: 'channel/:id',
        component: () => import('../views/Main/Channel')
      }, {
        name: 'article',
        path: 'article/:id',
        component: () => import('../views/Main/Article')
      }, {
        path: 'setting',
        component: () => import('../views/Main/Setting'),
        meta: {
          auth: true
        },
        children: [
          {
            path: 'base',
            component: () => import('../views/Main/Setting/Base')
          }, {
            path: 'avatar',
            component: () => import('../views/Main/Setting/Avatar')
          }, {
            path: 'password',
            component: () => import('../views/Main/Setting/Password')
          }
        ]
      }, {
        path: 'login',
        component: () => import('../views/Main/Login')
      }
    ]
  }, {
    path: '/user/:id',
    component: () => import('../views/User')
  }
]