'use client'
import { useSolanaBalance } from '@/hooks/useSolanaBalance'
import useUser from '@/hooks/useUser'
import AssetsList from '../Asset/AssetsList'
import WalletInformation from '../walletInformation/WalletInformation'
import styles from './WalletBalancesBody.module.css'

interface WalletInformationProps {
  priceSolana: number
  username: string
}

const assets = [
  {
    currency: 'USDT',
    network: 'USDT',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
  },
]

const WalletBalancesBody = ({ priceSolana, username }: WalletInformationProps) => {
  const { user } = useUser()
  const { solBalance, isLoading } = useSolanaBalance(user?.address as string)
  if (isLoading || !solBalance) return null
  return (
    <>
      {<WalletInformation priceSolana={priceSolana} solBalance={solBalance} username={username} />}
      <div className={styles.myAssetsDiv}>
        <p className={styles.myAssetsText}>My assets (02)</p>
        <AssetsList asset={assets} username={username} solBalance={solBalance} solPrice={priceSolana} />
      </div>
    </>
  )
}

export default WalletBalancesBody
