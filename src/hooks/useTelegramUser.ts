import { createOrLogin } from '@/dataFetching/users/createOrLogin'
import { TelegramUser, User } from '@/types/user'
import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'
import { useUserStore } from '@/app/store/userStore'
import { fakeTelegramUserData, IS_DEV } from '@/utils/fakeTelegramUserData'

const useTelegramUser = (): TelegramUser | null => {
  const [userTelegramInfo, setUserTelegramInfo] = useState<TelegramUser | null>(null)
  const { setUser: setUserStore, setToken } = useUserStore()

  useEffect(() => {
    const createUser = async () => {
      if (WebApp.initDataUnsafe.user) {
        const userInfo = WebApp.initDataUnsafe.user as TelegramUser
        setUserTelegramInfo(userInfo)
        try {
          const { user: completeUser, token } = await createOrLogin(userInfo)
          setUserStore(completeUser as User)
          setToken(token)
        } catch (error) {
          console.error('Error creating or logging in user', error)
        }
      } else if (IS_DEV) {
        setUserTelegramInfo(fakeTelegramUserData)
        try {
          const { user: completeUser, token } = await createOrLogin(fakeTelegramUserData)
          setUserStore(completeUser as User)
          setToken(token)
        } catch (error) {
          console.error('Error creating or logging in user', error)
        }
      }
    }
    createUser()
  }, [setUserTelegramInfo, setUserStore, setToken])

  return userTelegramInfo
}

export default useTelegramUser
