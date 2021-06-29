import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import routesBank from './routes.bank'
import routesCrm from './routes.crm'

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
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.Authorization.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Auth.Registration.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  ...routesBank,
  ...routesCrm
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
