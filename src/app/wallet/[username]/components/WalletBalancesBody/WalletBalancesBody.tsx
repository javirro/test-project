import AssetsList from '../Asset/AssetsList'
import WalletInformation from '../walletInformation/WalletInformation'
import styles from './WalletBalancesBody.module.css'
import { formatAssetsInfo } from '@/utils/fakeAssetsList'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { getSolanaBalance } from '@/contracts/getBalances'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { getUserBalancesProjectList } from '@/dataFetching/users/getUserBalancesProjectList'
import { Price } from '@/types/prices'
import { UserBalanceWithProjectInfo } from '@/types/user'

interface WalletInformationProps {
  username: string
}

const WalletBalancesBody = async ({ username }: WalletInformationProps) => {
  const cookiesStore = await cookies()
  const userCookie = cookiesStore.get('user')?.value
  const token = cookiesStore.get('token')?.value
  if (!userCookie) notFound()
  const user = JSON.parse(userCookie)
  const promises = [getSolanaPrice(), getSolanaBalance(user.address as string), getUserBalancesProjectList(user, token as string)]
  const [solanaPriceData, solanaBalance, balancesList] = await Promise.all(promises)
  const { solBalance } = solanaBalance as { lamportSolBalance: string; solBalance: string }
  const { price: solanaPrice } = solanaPriceData as Price

  const formateddBalancesList = formatAssetsInfo(balancesList as UserBalanceWithProjectInfo[])
  const numberOfAssets = formateddBalancesList.length + 1

  return (
    <>
      {<WalletInformation priceSolana={solanaPrice} solBalance={solBalance} username={username} />}
      <div className={styles.myAssetsDiv}>
        <p className={styles.myAssetsText}>My assets ({numberOfAssets})</p>
        <AssetsList assets={formateddBalancesList} username={username} solBalance={solBalance} solPrice={solanaPrice} />
      </div>
    </>
  )
}

export default WalletBalancesBody
