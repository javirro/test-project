import { useUserStore } from '@/app/store/userStore'
import cookiesUserUtils from '@/utils/clientCookiesUtils'
import { useEffect } from 'react'

const useUser = () => {
  const userStore = useUserStore()
  const { user, token, setToken, setUser } = userStore

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!token) {
        const localStorageToken = cookiesUserUtils.getTokenFromCookie()
        if (localStorageToken) {
          setToken(localStorageToken)
        }
      }
    }
  }, [setToken, token])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!user) {
        const localStorageUser = cookiesUserUtils.getUserDataFromCookie()
        if (localStorageUser) {
          setUser(localStorageUser)
        }
      }
    }
  }, [setUser, user])

  return { user, token }
}

export default useUser
