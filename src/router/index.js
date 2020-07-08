/*
 * @Author: your name
 * @Date: 2020-07-08 08:26:17
 * @LastEditTime: 2020-07-08 11:40:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\doit\vue admin\vue-cli3-base\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/pages/StaffDetail')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/pages/StaffList')
  },
  {
    path: '/',
    redirect: '/list'
  }
]
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
