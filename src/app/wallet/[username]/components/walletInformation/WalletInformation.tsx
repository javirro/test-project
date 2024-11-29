'use client'

import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import style from './walletInformation.module.css'
import WalletButtonsNavigation from './WalletButtonsNavigation'


interface WalletInformationProps {
  priceSolana: number
  solBalance: string
  username: string
}

function WalletInformation({ username, priceSolana, solBalance }: WalletInformationProps) {
  console.log({ username, priceSolana, solBalance })
  return (
    <section className={style.main}>
      <div className={style.balanceSection}>
        <p className={style.amount}>${12}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <p className={style.gains}>+${12}</p>
          <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" />
        </div>
      </div>
      <WalletButtonsNavigation username={username} />
    </section>
  )
}

export default WalletInformation
