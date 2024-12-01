import AssetsList from '../Asset/AssetsList'
import WalletInformation from '../walletInformation/WalletInformation'
import styles from './WalletBalancesBody.module.css'
import { assets } from '@/utils/fakeAssetsList'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { getSolanaBalance } from '@/contracts/getBalances'

interface WalletInformationProps {
  priceSolana: number
  username: string
}

const WalletBalancesBody = async ({ priceSolana, username }: WalletInformationProps) => {
  const cookiesStore = await cookies()
  const userCookie = cookiesStore.get('user')?.value
  if (!userCookie) notFound()
  const user = JSON.parse(userCookie)
  const { solBalance } = await getSolanaBalance(user?.address as string)
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
