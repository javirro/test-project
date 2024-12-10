import style from './page.module.css'
import SearchableAsset from '../send/components/searchableAsset/SearchableAsset'
import ResumeContentWrapper from './resume/resumeContentWrapper/ResumeContentWrapper'
import Link from 'next/link'
import TransactionConfirmation from './confirmation/TransactionConfirmation/transactionConfirmation/TransactionConfirmation'
import { assets } from '@/utils/fakeAssetsList'
import AmountSelection from './amount/AmountSelection'
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { getSolanaBalance } from '@/contracts/getBalances'
import { notFound } from 'next/navigation'
import { User } from '@/types/user'
import SekeletonLoaderSend from '../send/components/skeletonLoader/SekeletonLoaderSend'

interface PageProps {
  params: Promise<{ username: string }>
}

//! cookies structure
/*
  {
    sellStep: '1', '2', '3', '4'
    sellToken: {address: '0x', symbol: 'USDT', name: 'Tether'}
    tokenOut: {address: '0x', symbol: 'USDT', name: 'Tether'}
    amountIn: '0.0'
  }
*/
async function SellPage({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = await cookies()
  const sellStep: string = cookiesStore.get('sellStep')?.value ?? '1'
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  if (!user) notFound()

  return (
    <Suspense fallback={<SekeletonLoaderSend />}>
      <SellBodyComponent username={username} userAddress={user.address} sellStep={sellStep} />
    </Suspense>
  )
}

export default SellPage

const SellBodyComponent = async ({ username, userAddress, sellStep }: { sellStep: string; username: string; userAddress: string }) => {
  const solanaPrice: number = (await getSolanaPrice()).price
  const { solBalance } = await getSolanaBalance(userAddress as string)
  //TODO: FETCH USER BALANCE
  //TODO: FETCH ASSETS PRICES
  return (
    <>
      {sellStep === '1' && (
        <section className={style.main}>
          <SearchableAsset assets={assets} username={username} solanaPrice={solanaPrice} solanaBalance={solBalance} />
        </section>
      )}
      {sellStep === '2' && <AmountSelection />}
      {sellStep === '3' && <ResumeContentWrapper />}
      {sellStep === '4' && (
        <main className={style.confirmationMain}>
          <p className={style.confirmationText}>Just sold!</p>
          <TransactionConfirmation />
          <div className={style.confirmationNextButtonDiv}>
            <Link href={`/wallet/${username}`} className={style.confirmationNextButton}>
              Back to wallet
            </Link>
          </div>
        </main>
      )}
    </>
  )
}
