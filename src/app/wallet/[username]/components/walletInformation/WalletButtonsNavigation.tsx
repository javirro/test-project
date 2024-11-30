'use client'

import { useNavBarStore } from '@/app/store/navBarStore'
import ClockButtonIcon from '@/images/buttons/components/ClockButton'
import DollarButtonIcon from '@/images/buttons/components/dollarButton'
import QrButtonIcon from '@/images/buttons/components/qrButton'
import SendButtonIcon from '@/images/status/components/sendButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import style from './walletInformation.module.css'
import { setCookie } from 'cookies-next'

const WalletButtonsNavigation = ({ username }: { username: string }) => {
  const { setActionNavBarMessage } = useNavBarStore()
  const [activeButton, setActiveButton] = useState<string>('send')
  const router = useRouter()

  const handleButtonClick = (button: string) => {
    setActiveButton(button)

    if (button === 'receive') {
      router.push(`/wallet/${username}/receive`)
    } else if (button === 'activity') {
      router.push(`/wallet/${username}/activity`)
      setActionNavBarMessage('Recent activity')
    } else if (button === 'send') {
      router.push(`/wallet/${username}/send`)
      setActionNavBarMessage('Select a token')
      setCookie('sellStep', '1')
    } else if(button === 'sell') {
      router.push(`/wallet/${username}/sell`)
      setActionNavBarMessage('Sell')
      //setCookie('sellStep', '1')
    }
  }
  return (
    <div className={style.buttonsSection}>
      <div className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'send' ? style.activeButton : ''}`} onClick={() => handleButtonClick('send')}>
          <SendButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Send</p>
      </div>
      <div className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'receive' ? style.activeButton : ''}`} onClick={() => handleButtonClick('receive')}>
          <QrButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Receive</p>
      </div>
      <div className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'activity' ? style.activeButton : ''}`} onClick={() => handleButtonClick('activity')}>
          <ClockButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Activity</p>
      </div>
      <div className={style.buttonDiv}>
        <button className={`${style.button} ${activeButton === 'sell' ? style.activeButton : ''}`} onClick={() => handleButtonClick('sell')}>
          <DollarButtonIcon width="24" height="24" color="#707579" />
        </button>
        <p>Sell</p>
      </div>
    </div>
  )
}

export default WalletButtonsNavigation
