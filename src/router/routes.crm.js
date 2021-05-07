const routesCrm = [
  {
    path: '/crm',
    name: 'Crm',
    component: () => import('../views/crm/Crm.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/categories',
    name: 'Categories',
    component: () => import('../views/crm/Categories.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/history/detail/:id',
    name: 'Detail',
    component: () => import('../views/crm/Detail.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/history',
    name: 'History',
    component: () => import('../views/crm/History.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/planing',
    name: 'Planing',
    component: () => import('../views/crm/Planing.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/profile',
    name: 'Profile',
    component: () => import('../views/crm/Profile.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  },
  {
    path: '/crm/record',
    name: 'Record',
    component: () => import('../views/crm/Record.vue'),
    meta: {
      layout: 'crm',
      auth: true
    }
  }
]

export default routesCrm
