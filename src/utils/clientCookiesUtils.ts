import { User } from '@/types/user'
import { setCookie, getCookie, deleteCookie, CookieValueTypes } from 'cookies-next/client'

const setTokenInCookie = (token: string) => {
  setCookie('token', token, { maxAge: 60 * 60 * 24 * 30 })
}

const setUserDataInCookie = (user: User) => {
  setCookie('user', JSON.stringify(user))
}

const getUserDataFromCookie = (): User | undefined => {
  const user: CookieValueTypes = getCookie('user')
  return user ? JSON.parse(user) : undefined
}

const getTokenFromCookie = (): string | undefined => {
  const token: CookieValueTypes = getCookie('token')
  return token
}

const removeTokenFromCookie = () => {
  deleteCookie('token')
}

const removeUserDataFromCookie = () => {
  deleteCookie('user')
}

const cookiesUserUtils = {
  setTokenInCookie,
  setUserDataInCookie,
  getUserDataFromCookie,
  getTokenFromCookie,
  removeTokenFromCookie,
  removeUserDataFromCookie,
}

export default cookiesUserUtils
