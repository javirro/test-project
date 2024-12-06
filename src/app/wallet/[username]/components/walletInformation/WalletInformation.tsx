
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import style from './walletInformation.module.css'
import WalletButtonsNavigation from './WalletButtonsNavigation'

interface WalletInformationProps {
  priceSolana: number
  solBalance: string
  username: string
}

function WalletInformation({ username, priceSolana, solBalance }: WalletInformationProps) {
  const totalBalance = parseFloat(solBalance) * priceSolana
  return (
    <section className={style.main}>
      <div className={style.balanceSection}>
        <p className={style.amount}>${totalBalance.toFixed(2)}</p>
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
