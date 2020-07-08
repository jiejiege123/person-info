/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2020-07-08 11:20:39
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'

// 获取模拟数据
export function getInfo () {
  return request({
    url: '/Accounts/Profile',
    method: 'get'
  })
}
