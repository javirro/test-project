'use client'

import { useNavBarStore } from '@/app/store/navBarStore'
import ClockButtonIcon from '@/images/buttons/components/ClockButton'
import DollarButtonIcon from '@/images/buttons/components/dollarButton'
import QrButtonIcon from '@/images/buttons/components/qrButton'
import SendButtonIcon from '@/images/status/components/sendButton'
import { useState } from 'react'
import style from './walletInformation.module.css'
import { setCookie } from  'cookies-next/client'
import Link from 'next/link'

type WalletButtons = 'send' | 'receive' | 'activity' | 'sell' | ''

const WalletButtonsNavigation = ({ username }: { username: string }) => {
  const { setActionNavBarMessage } = useNavBarStore()
  const [activeButton, setActiveButton] = useState<WalletButtons>('')

  const handleButtonClick = (button: WalletButtons) => {
    setActiveButton(button)

    if (button === 'receive') {
    } else if (button === 'activity') {
      setActionNavBarMessage('Recent activity')
    } else if (button === 'send') {
      setCookie('sendStep', '1')
      setActionNavBarMessage('Select a token')
    } else if (button === 'sell') {
      setActionNavBarMessage('Sell')
      setCookie('sellStep', '1')
    }
  }
  return (
    <div className={style.buttonsSection}>
      <Link href={`/wallet/${username}/send`} className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'send' ? style.activeButton : ''}`} onClick={() => handleButtonClick('send')}>
          <SendButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Send</p>
      </Link>
      <Link href={`/wallet/${username}/receive`} className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'receive' ? style.activeButton : ''}`} onClick={() => handleButtonClick('receive')}>
          <QrButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Receive</p>
      </Link>
      <Link href={`/wallet/${username}/activity`} className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'activity' ? style.activeButton : ''}`} onClick={() => handleButtonClick('activity')}>
          <ClockButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Activity</p>
      </Link>
      <Link href={`/wallet/${username}/sell`} className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'sell' ? style.activeButton : ''}`} onClick={() => handleButtonClick('sell')}>
          <DollarButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Sell</p>
      </Link>
    </div>
  )
}

export default WalletButtonsNavigation
