'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import SendButtonIcon from '@/images/status/components/sendButton'
import QrButtonIcon from '@/images/buttons/components/qrButton'
import ClockButtonIcon from '@/images/buttons/components/ClockButton'
import DollarButtonIcon from '@/images/buttons/components/dollarButton'
import style from './walletInformation.module.css'
import { useNavBarStore } from '@/app/store/navBarStore'

interface WalletInformationProps {
  amount: number
  gains: number
  username: string
}

function WalletInformation({ amount, gains, username }: WalletInformationProps) {
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
    }
  }

  return (
    <section className={style.main}>
      <div className={style.balanceSection}>
        <p className={style.amount}>${amount}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <p className={style.gains}>+${gains}</p>
          <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" />
        </div>
      </div>
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
    </section>
  )
}

export default WalletInformation
