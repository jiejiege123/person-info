/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2020-07-08 11:14:35
 * @LastEditors: Please set LastEditors
 */
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
  document.title = getPageTitle(to.name)
  NProgress.done()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
