import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Community.vue'

const routes = [
  {
    path: '/',
    name: 'Community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue')
  },
  {
    path: '/connect',
    name: 'Connect',
    component: () => import('../views/Connect.vue')
  },
  {
    path: '/eldermanage',
    name: 'ElderManage',
    component: () => import('../views/ElderManage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
