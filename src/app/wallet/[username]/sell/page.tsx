// import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
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

// import { cookies } from 'next/headers'
// import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
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
  const sellStep: string = (cookiesStore).get('sellStep')?.value ?? '1'
  //TODO: FETCH USER BALANCE
  //TODO: FETCH ASSETS PRICES

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SellBodyComponent username={username} sellStep={sellStep} />
    </Suspense>
  )
}

export default SellPage

const SellBodyComponent = async ({ username, sellStep }: { sellStep: string; username: string }) => {
  const solanaPrice: number = (await getSolanaPrice()).price
  return (
    <>
      {sellStep === '1' && (
        <section className={style.main}>
          <SearchableAsset assets={assets} username={username} solanaPrice={solanaPrice} />
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
