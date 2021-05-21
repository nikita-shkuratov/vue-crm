const routesBank = [
  {
    path: '/bank',
    name: 'Bank',
    component: () => import('../views/Bank.Home.vue'),
    meta: {
      layout: 'bank',
      auth: true
    }
  },
  {
    path: '/bank/reguest/:id',
    name: 'Requests',
    component: () => import('../views/Bank.Request.vue'),
    meta: {
      layout: 'bank',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Bank.Help.vue'),
    meta: {
      layout: 'bank',
      auth: true
    }
  }
]

export default routesBank
