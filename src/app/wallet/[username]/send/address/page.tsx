'use client'

import { AppRoot, Input, Tappable } from '@telegram-apps/telegram-ui'
import '@telegram-apps/telegram-ui/dist/styles.css'
import style from './page.module.css'
// import { useState } from 'react'

function page() {
  // const [username, setUsername] = useState<string>('')

  return (
    <AppRoot style={{ width: '100%', padding: '64px 16px' }} appearance="light">
      <Input
        className={`${style.inputStyle} ${style.customInputPadding}`}
        header="To"
        placeholder="@username or address"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        after={
          <Tappable Component="div" style={{ display: 'flex' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Tappable>
        }
      />
    </AppRoot>
  )
}

export default page
