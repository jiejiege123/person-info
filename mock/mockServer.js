/*
 * @Author: your name
 * @Date: 2020-07-01 10:08:08
 * @LastEditTime: 2020-07-08 10:58:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\mock\mockServer.js
 */
import Mock from 'mockjs'
export function mockXHR () {
  Mock.mock(/\Profile/, {
    'list|1-10': [{
      'id|+1': 1,
      email: '@EMAIL'
    }]
  })
}
