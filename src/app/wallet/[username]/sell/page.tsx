import style from './page.module.css'
import { cookies } from 'next/headers'
// import SearchableAsset from '../send/components/searchableAsset/SearchableAsset'
// import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
// import ResumeContentWrapper from './resume/resumeContentWrapper/ResumeContentWrapper'
// import Link from 'next/link'
// import TransactionConfirmation from './confirmation/TransactionConfirmation/transactionConfirmation/TransactionConfirmation'
// import { assets } from '@/utils/fakeAssetsList'
// import AmountSelection from './amount/AmountSelection'
// import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
// import { Suspense } from 'react'
// import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'

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
async function SellPage({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = await cookies()
  const sellStep: string = (await cookiesStore).get('sellStep')?.value ?? '1'
  //TODO: FETCH USER BALANCE
  //TODO: FETCH ASSETS PRICES

  return (
    <section className={style.main}>
      <h1>Sell: {sellStep}</h1>
      <h3>{username}</h3>
    </section>
  )
}

export default SellPage

// const SellBodyComponent = async ({ username, sellStep }: { sellStep: string; username: string }) => {
//   const solanaPrice: number = 100
//   return (
//     <>
//       {sellStep === '1' && (
//         <section className={style.main}>
//           <SearchableAsset assets={assets} username={username} solanaPrice={solanaPrice} />
//         </section>
//       )}
//       {sellStep === '2' && <AmountSelection />}
//       {sellStep === '3' && <ResumeContentWrapper />}
//       {sellStep === '4' && (
//         <main className={style.confirmationMain}>
//           <p className={style.confirmationText}>Just sold!</p>
//           <TransactionConfirmation />
//           <div className={style.confirmationNextButtonDiv}>
//             <Link href={`/wallet/${username}`} className={style.confirmationNextButton}>
//               Back to wallet
//             </Link>
//           </div>
//         </main>
//       )}
//     </>
//   )
// }
