'use client'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import style from './walletInformation.module.css'
import WalletButtonsNavigation from './WalletButtonsNavigation'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import { useSolanaBalance } from '@/hooks/useSolanaBalance'
import useUser from '@/hooks/useUser'

interface WalletInformationProps {
  priceSolana: number
}

function WalletInformation({ priceSolana }: WalletInformationProps) {
  const { user } = useUser()
  const { balance } = useSolanaBalance(user?.address as string)
  console.log("balance", balance)
  console.log("priceSolana", priceSolana)
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
      <WalletButtonsNavigation username={user?.username as string} />
    </section>
  )
}

const WalletInformationWrapper = ({ priceSolana }: WalletInformationProps) => {
  return (
    <TanstackQueryProvider>
      <WalletInformation priceSolana={priceSolana} />
    </TanstackQueryProvider>
  )
}
export default WalletInformationWrapper
