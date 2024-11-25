import { TelegramUser } from '@/types/user'
import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

const useTelegramUser = (): TelegramUser | null => {
  const [user, setUser] = useState<TelegramUser | null>(null)
  console.log({ TelegramUser: user })

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      const userInfo = WebApp.initDataUnsafe.user as TelegramUser
      setUser(userInfo)
    }
  }, [])

  return user
}

export default useTelegramUser
