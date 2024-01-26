import Cookies from 'js-cookie'

const TokenKey = 'token'

const TOKEN_EXPIRES = 7 // 7天 有效期

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {
    expires: TOKEN_EXPIRES, // 7天 有效期
  })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
