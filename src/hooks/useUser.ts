import { useUserStore } from '@/app/store/userStore'
import localStorageUtils from '@/utils/localstorageUtils'
import { useEffect } from 'react'

const useUser = () => {
  const userStore = useUserStore()
  const { user, token, setToken, setUser } = userStore

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!token) {
        const localStorageToken = localStorageUtils.getTokenLocalStorage()
        if (localStorageToken) {
          setToken(localStorageToken)
        }
      }
    }
  }, [setToken, token])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!user) {
        const localStorageUser = localStorageUtils.getUserLocalStorage()
        if (localStorageUser) {
          setUser(localStorageUser)
        }
      }
    }
  }, [setUser, user])

  return { user, token }
}

export default useUser
