import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username: string
  language_code: string
  is_premium?: boolean
}

const useTelegramUser = (): TelegramUser | null => {
  const [user, setUser] = useState<TelegramUser | null>(null)
  console.log({ TelegramUser: user })

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe.user as TelegramUser)
    }
  }, [])

  return user
}

export default useTelegramUser
