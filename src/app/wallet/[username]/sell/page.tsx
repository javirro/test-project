import style from './page.module.css'
import SearchableAsset from '../send/components/searchableAsset/SearchableAsset'
// import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import ResumeContentWrapper from './resume/resumeContentWrapper/ResumeContentWrapper'
import Link from 'next/link'
import TransactionConfirmation from './confirmation/TransactionConfirmation/transactionConfirmation/TransactionConfirmation'
import { assets } from '@/utils/fakeAssetsList'
import AmountSelection from './amount/AmountSelection'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { cookies } from 'next/headers'

interface PageProps {
  params: Promise<{ username: string }>
}

// export const revalidate = 30 // 100seconds

// export const dynamicParams = true

// export async function generateStaticParams(): Promise<{ username: string }[]> {
//   const usernames = await getUsersUsernames()
//   const params = usernames.map((username) => ({ username }))
//   return params
// }

//! cookies structure
/*
  {
    sellStep: '1', '2', '3', '4'
    sellToken: {address: '0x', symbol: 'USDT', name: 'Tether'}
    tokenOut: {address: '0x', symbol: 'USDT', name: 'Tether'}
    amountIn: '0.0'
  }
*/
async function page({ params }: PageProps) {
  const { username } = await params
  console.log("Username sell page: ", username)
  const cookiesStore = await cookies()
  console.log("Cookies store sell page: ", cookiesStore)
  // const sellStep: string = (await cookiesStore).get('sellStep')?.value ?? '1'
  const sellStep: string = '1'
  const solanaPrice: number = (await getSolanaPrice()).price
  console.warn("Solana price sell page: ", solanaPrice)

  //TODO: FETCH USER BALANCE
  //TODO: FETCH ASSETS PRICES

  // Those values are common for all the users

  if (sellStep === '1') {
    return (
      <section className={style.main}>
        <SearchableAsset assets={assets} username={username} solanaPrice={solanaPrice}/>
      </section>
    )
  } else if (sellStep === '2') {
    return (
      <AmountSelection />
    )
  } else if (sellStep === '3') {
    return (
      <main className={style.main}>
        <ResumeContentWrapper />
      </main>
    )
  } else if (sellStep === '4') {
    return (
      <main className={style.confirmationMain}>
        <p className={style.confirmationText}>Just sold!</p>
        <TransactionConfirmation />
        <div className={style.confirmationNextButtonDiv}>
          <Link href={`/wallet/${username}`} className={style.confirmationNextButton}>
            Back to wallet
          </Link>
        </div>
      </main>
    )
  }
}

export default page
