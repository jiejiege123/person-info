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

import '@/assets/css/common.css'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import { mockXHR } from '../mock/mockServer'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts')
// 引入折线图/柱状图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')// 图例滚动

// import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts // 引入组件

Vue.use(ViewUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
