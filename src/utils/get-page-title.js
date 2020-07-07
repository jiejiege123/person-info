/*
 * @Author: your name
 * @Date: 2020-04-02 09:01:47
 * @LastEditTime: 2020-05-15 13:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-ui\src\utils\get-page-title.js
 */
// import defaultSettings from '@/settings'

// const title = defaultSettings.title || '民爆信息管理系统' localStorage.getItem('webname')
const title = localStorage.getItem('webname') || '民爆信息管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
