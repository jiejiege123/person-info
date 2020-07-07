/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2020-07-01 09:53:35
 * @LastEditors: Please set LastEditors
 */
(function umd(root, factory) {
  if (typeof module === 'object' && typeof exports === 'object')
    module.exports = factory()
  else if (typeof define === 'function' && define.amd)
    define([], factory())
  else
    root.apiServer = factory()
})(this,function factory() {
  const api = {
    login: function login(params) {
      const data = JSON.stringify(params)
      return service({
        url: '/Accounts/Login',
        method: 'post',
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    },
    loginOperate: function loginOperate(params) {
      const data = JSON.stringify(params)
      return service({
        url: '/Accounts/LoginWorder',
        method: 'post',
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    },
    getInfo: function getInfo() {
      return service({
        url: '/Accounts/Profile',
        method: 'get'
      })
    },
    logout: function logout() {
      return service({
        url: '/user/logout',
        method: 'post'
      })
    }
  }
  return api
})