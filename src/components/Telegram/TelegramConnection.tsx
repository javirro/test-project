'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function TelegramAuth() {
  const [user, setUser] = useState(null)
  console.log({ user })
  useEffect(() => {
    // Check if Telegram WebApp is available
    const telegram = (window as unknown as any).Telegram?.WebApp
    console.log("telegram", telegram)
    if (telegram) {
      const tg = telegram
      tg.ready() // Initialize Telegram WebApp

      // Get user information
      setUser(tg.initDataUnsafe?.user || null)
    }
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive" // Load it before the main app runs
      />
    </>
  )
}
