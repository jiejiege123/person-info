import Cookies from 'js-cookie'

const TokenKey = 'setToken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const WorderTokenKey = 'setWorderToken'

export function getWorderToken() {
  return Cookies.get(WorderTokenKey)
}

export function setWorderToken(token) {
  return Cookies.set(WorderTokenKey, token)
}

export function removeWorderToken() {
  return Cookies.remove(WorderTokenKey)
}

