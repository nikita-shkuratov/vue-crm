import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/reguest/:id',
    name: 'Requests',
    component: () => import('../views/Request.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
    meta: {
      layout: 'reg',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth
  if (requiredAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requiredAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
