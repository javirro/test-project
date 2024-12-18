import style from './page.module.css'
import SearchableAsset from '../send/components/searchableAsset/SearchableAsset'
import ResumeContentWrapper from './resume/resumeContentWrapper/ResumeContentWrapper'
import Link from 'next/link'
import TransactionConfirmation from './confirmation/TransactionConfirmation/transactionConfirmation/TransactionConfirmation'
import { formatAssetsInfo } from '@/utils/fakeAssetsList'
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { getSolanaBalance } from '@/contracts/getBalances'
import { notFound } from 'next/navigation'
import { User, UserBalanceWithProjectInfo } from '@/types/user'
import SekeletonLoaderSend from '../send/components/skeletonLoader/SekeletonLoaderSend'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { revalidatePath } from 'next/cache'
import { setCookie } from 'cookies-next'
import { getUserBalancesProjectList } from '@/dataFetching/users/getUserBalancesProjectList'
import { Price } from '@/types/prices'
import AmountInformation from '../send/amount/amountInformation/AmountInformation'
import Keyboard from '../send/amount/keyboard/Keyboard'
import NextButton from '../send/amount/nextButton/NextButton'
import SelectAmount from './amount/selectAmount/SelectAmount'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams() {
  const usernames = await getUsersUsernames()
  return usernames.map((u) => ({
    username: u,
  }))
}

async function SellPage({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = await cookies()
  const sellStep: string = cookiesStore.get('sellStep')?.value ?? '1'
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  const token = cookiesStore.get('token')?.value
  if (!user || !token) notFound()

  return (
    <Suspense fallback={<SekeletonLoaderSend />}>
      <SellBodyComponent username={username} user={user} sellStep={sellStep} token={token} />
    </Suspense>
  )
}

export default SellPage

const SellBodyComponent = async ({ user, token, sellStep, username }: { sellStep: string; user: User; token: string; username: string }) => {
  const promises = [getSolanaPrice(), getSolanaBalance(user.address as string), getUserBalancesProjectList(user, token as string)]
  const [solanaPriceData, solanaBalance, balancesList] = await Promise.all(promises)
  const { solBalance } = solanaBalance as { lamportSolBalance: string; solBalance: string }
  const { price: solanaPrice } = solanaPriceData as Price

  const formateddBalancesList = formatAssetsInfo(balancesList as UserBalanceWithProjectInfo[])

  const handleBackToWallet = () => {
    revalidatePath(`/wallet/${username}`)
    setCookie('sellStep', '1')
  }
  return (
    <>
      {sellStep === '1' && (
        <section className={style.main}>
          <SearchableAsset assets={formateddBalancesList} username={username} solanaPrice={solanaPrice} solanaBalance={solBalance} />
        </section>
      )}
      {sellStep === '2' && (
        <main className={style.amountMain}>
          <AmountInformation balanceList={formateddBalancesList} />
          <SelectAmount balanceList={formateddBalancesList} />
          <NextButton balanceList={formateddBalancesList} solBalance={solBalance}/>
          <Keyboard />
        </main>
      )}
      {sellStep === '3' && <ResumeContentWrapper />}
      {sellStep === '4' && (
        <main className={style.confirmationMain}>
          <p className={style.confirmationText}>Just sold!</p>
          <TransactionConfirmation />
          <div className={style.confirmationNextButtonDiv}>
            <Link href={`/wallet/${username}`} className={style.confirmationNextButton} onClick={handleBackToWallet}>
              Back to wallet
            </Link>
          </div>
        </main>
      )}
    </>
  )
}
