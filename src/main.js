/*
 * @Author: your name
 * @Date: 2020-07-08 08:26:17
 * @LastEditTime: 2020-07-08 11:23:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\doit\vue admin\vue-cli3-base\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/permission' // permission control

import { mockXHR } from '../mock/mockServer'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
