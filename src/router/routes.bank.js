const routesBank = [
  {
    path: '/bank',
    name: 'Bank',
    component: () => import('../views/bank/Bank.vue'),
    meta: {
      layout: 'bank',
      auth: true
    }
  },
  {
    path: '/bank/reguest/:id',
    name: 'Requests',
    component: () => import('../views/bank/Request.vue'),
    meta: {
      layout: 'bank',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/bank/Help.vue'),
    meta: {
      layout: 'bank',
      auth: true
    }
  }
]

export default routesBank
