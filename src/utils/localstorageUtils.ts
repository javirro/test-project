import { User } from '@/types/user'

function setTokenLocalStorage(token: string) {
  localStorage.setItem('token', token)
}

function getTokenLocalStorage(): string | null {
  return localStorage.getItem('token')
}

function setUserLocalStorage(user: User) {
  localStorage.setItem('user', JSON.stringify(user))
}

function getUserLocalStorage(): User | null {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

function removeUserLocalStorage() {
  localStorage.removeItem('user')
}

function removeTokenLocalStorage() {
  localStorage.removeItem('token')
}

const localStorageUtils = {
  setTokenLocalStorage,
  getTokenLocalStorage,
  setUserLocalStorage,
  getUserLocalStorage,
  removeUserLocalStorage,
  removeTokenLocalStorage,
}

export default localStorageUtils
