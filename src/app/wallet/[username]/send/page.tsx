import style from './page.module.css'
import SearchableAsset from './components/searchableAsset/SearchableAsset'
import { formatAssetsInfo } from '@/utils/fakeAssetsList'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { User, UserBalanceWithProjectInfo } from '@/types/user'
import { getSolanaBalance } from '@/contracts/getBalances'
import { Suspense } from 'react'
import { getUserBalancesProjectList } from '@/dataFetching/users/getUserBalancesProjectList'
import { Price } from '@/types/prices'

async function page() {
  const cookiesStore = await cookies()
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  const token = cookiesStore.get('token')?.value
  if (!user || !token) notFound()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SendBodyComponent token={token} user={user} sendStep={'1'} />
    </Suspense>
  )
}

export default page

const SendBodyComponent = async ({ user, token }: { sendStep: string; user: User; token: string }) => {
  const promises = [getSolanaPrice(), getSolanaBalance(user.address as string), getUserBalancesProjectList(user, token as string)]
  const [solanaPriceData, solanaBalance, balancesList] = await Promise.all(promises)
  const { solBalance } = solanaBalance as { lamportSolBalance: string; solBalance: string }
  const { price: solanaPrice } = solanaPriceData as Price

  const formateddBalancesList = formatAssetsInfo(balancesList as UserBalanceWithProjectInfo[])
  return (
    <section className={style.main}>
      <SearchableAsset assets={formateddBalancesList} username={user.username} solanaPrice={solanaPrice} solanaBalance={solBalance} />
    </section>
  )
}
