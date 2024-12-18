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
import SekeletonLoaderSend from './components/skeletonLoader/SekeletonLoaderSend'
import SetDestinationAddress from './components/setDestinationAddress/SetDestinationAddress'
import AmountInformation from './amount/amountInformation/AmountInformation'
import Keyboard from './amount/keyboard/Keyboard'
import NextButton from './amount/nextButton/NextButton'
import SelectAmount from './amount/selectAmount/SelectAmount'
import ResumeContentWrapper from './resume/resumeContentWrapper/ResumeContentWrapper'
import TransactionConfirmation from './confirmation/transactionConfirmation/TransactionConfirmation'
import BackToWalletButton from './confirmation/BackToWalletButton'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { getLastAddressesList } from '@/dataFetching/transactions/getTransactionsList'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams() {
  const usernames = await getUsersUsernames()
  return usernames.map((u) => ({
    username: u,
  }))
}

async function page({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = await cookies()
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  const token = cookiesStore.get('token')?.value
  const sendStep: string = cookiesStore.get('sendStep')?.value ?? '1'
  if (!user || !token) notFound()

  return (
    <Suspense fallback={<SekeletonLoaderSend />}>
      <SendBodyComponent token={token} user={user} sendStep={sendStep} username={username} />
    </Suspense>
  )
}

export default page

const SendBodyComponent = async ({ user, token, sendStep, username }: { sendStep: string; user: User; token: string; username: string }) => {
  const promises = [getSolanaPrice(), getSolanaBalance(user.address as string), getUserBalancesProjectList(user, token as string)]
  const [solanaPriceData, solanaBalance, balancesList] = await Promise.all(promises)
  const { solBalance } = solanaBalance as { lamportSolBalance: string; solBalance: string }
  const { price: solanaPrice } = solanaPriceData as Price

  const formateddBalancesList = formatAssetsInfo(balancesList as UserBalanceWithProjectInfo[])
  const addresses = await getLastAddressesList(user, token)

  return (
    <>
      {sendStep === '1' && (
        <section className={style.main}>
          <SearchableAsset assets={formateddBalancesList} username={user.username} solanaPrice={solanaPrice} solanaBalance={solBalance} />
        </section>
      )}
      {sendStep === '2' && <SetDestinationAddress addresses={addresses} />}

      {sendStep === '3' && (
        <main className={style.mainAmount}>
          <AmountInformation balanceList={formateddBalancesList} />
          <SelectAmount balanceList={formateddBalancesList} />
          <NextButton balanceList={formateddBalancesList} solBalance={solBalance} />
          <Keyboard />
        </main>
      )}

      {sendStep === '4' && (
        <main className={style.mainResume}>
          <ResumeContentWrapper solPrice={solanaPrice} />
        </main>
      )}

      {sendStep === '5' && (
        <main className={style.mainConfirmation}>
          <p className={style.text}>Just sent!</p>
          <TransactionConfirmation solPrice={solanaPrice} />
          <BackToWalletButton username={username} />
        </main>
      )}
    </>
  )
}
