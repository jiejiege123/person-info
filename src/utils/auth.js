/*
 * @Author: your name
 * @Date: 2020-07-08 08:26:17
 * @LastEditTime: 2020-07-08 08:46:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\doit\vue admin\vue-cli3-base\src\utils\auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'setToken'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

const WorderTokenKey = 'setWorderToken'

export function getWorderToken () {
  return Cookies.get(WorderTokenKey)
}

export function setWorderToken (token) {
  return Cookies.set(WorderTokenKey, token)
}

export function removeWorderToken () {
  return Cookies.remove(WorderTokenKey)
}
