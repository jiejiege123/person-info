/*
 * @Author: your name
 * @Date: 2020-04-02 09:01:47
 * @LastEditTime: 2020-07-08 08:49:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-ui\src\utils\get-page-title.js
 */
import defaultSettings from '@/settings'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${defaultSettings.title}`
  }
  return `${defaultSettings.title}`
}
