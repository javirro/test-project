import AssetsList from '../Asset/AssetsList'
import WalletInformation from '../walletInformation/WalletInformation'
import styles from './WalletBalancesBody.module.css'
import { formatAssetsInfo } from '@/utils/fakeAssetsList'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { getSolanaBalance } from '@/contracts/getBalances'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { getUserBalancesProjectList } from '@/dataFetching/users/getUserBalancesProjectList'

interface WalletInformationProps {
  username: string
}

const WalletBalancesBody = async ({  username }: WalletInformationProps) => {
  const cookiesStore = await cookies()
  const userCookie = cookiesStore.get('user')?.value
  const token = cookiesStore.get('token')?.value
  if (!userCookie) notFound()
  const user = JSON.parse(userCookie)
  const priceSolana: number = (await getSolanaPrice()).price
  const { solBalance } = await getSolanaBalance(user?.address as string)
  const balancesList = await getUserBalancesProjectList(user, token as string)
  const formateddBalancesList = formatAssetsInfo(balancesList)
  const numberOfAssets = balancesList.length  +1

  return (
    <>
      {<WalletInformation priceSolana={priceSolana} solBalance={solBalance} username={username} />}
      <div className={styles.myAssetsDiv}>
        <p className={styles.myAssetsText}>My assets ({numberOfAssets})</p>
        <AssetsList assets={formateddBalancesList} username={username} solBalance={solBalance} solPrice={priceSolana} />
      </div>
    </>
  )
}

export default WalletBalancesBody
