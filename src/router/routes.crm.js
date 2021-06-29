const routesCrm = [
  {
    path: '/crm',
    name: 'Crm',
    component: () => import('../views/Crm.Home.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/categories',
    name: 'Categories',
    component: () => import('../views/Crm.Categories.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/history/detail/:id',
    name: 'Detail',
    component: () => import('../views/Crm.Detail.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/history',
    name: 'History',
    component: () => import('../views/Crm.History.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/planing',
    name: 'Planing',
    component: () => import('../views/Crm.Planing.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/profile',
    name: 'Profile',
    component: () => import('../views/Crm.Profile.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/record',
    name: 'Record',
    component: () => import('../views/Crm.Record.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  }
]

export default routesCrm
