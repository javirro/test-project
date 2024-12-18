'use client'

import { AppRoot, Input, Tappable } from '@telegram-apps/telegram-ui'
import TapBarSendActions from './TapBarSendActions'
import { useState } from 'react'
import LastAddressesUsed from './LastAddressesUsed'


import style from './SetDestinationAddress.module.css'
import '@telegram-apps/telegram-ui/dist/styles.css'

const SetDestinationAddress = ({ addresses }: { addresses: string[] }) => {
  const [destination, setDestination] = useState<string>('')


  return (
    <AppRoot style={{ width: '100%', padding: '100px 16px', display: 'flex', flexDirection: 'column', gap: '24px',  }} appearance="light" className="tg-ui--light">
      <Input
        className={`${style.inputStyle} ${style.customInputPadding}`}
        header="To"
        placeholder="@username or address"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        after={
          <Tappable Component="div" style={{ display: 'flex' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Tappable>
        }
      />
      {addresses && addresses.length > 0 && (
        <LastAddressesUsed setDestination={setDestination} lastUsedAddresses={addresses as string[]} />
      )}
      <TapBarSendActions destination={destination} />
    </AppRoot>
  )
}

export default SetDestinationAddress
