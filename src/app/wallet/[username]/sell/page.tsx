import style from './page.module.css'
import SearchableAsset from '../send/components/searchableAsset/SearchableAsset'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { cookies } from 'next/headers'
import AmountInformation from './amount/amountInformation/AmountInformation'
import Keyboard from './amount/keyboard/Keyboard'
import SelectAmount from './amount/selectAmount/SelectAmount'
import ResumeContentWrapper from './resume/resumeContentWrapper/ResumeContentWrapper'
import Link from 'next/link'
import TransactionConfirmation from './confirmation/TransactionConfirmation/transactionConfirmation/TransactionConfirmation'

interface PageProps {
  params: Promise<{ username: string }>
}

const assets = [
  {
    currency: 'Solana',
    network: 'SOL',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
  },
  {
    currency: 'USDT',
    network: 'USDT',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
  },
  {
    currency: 'Ethereum',
    network: 'ETH',
    amount: 4980.0,
    gains: 300,
    amountInUSD: 6000,
  },
  {
    currency: 'Bitcoin',
    network: 'BTC',
    amount: 1.0,
    gains: 10000,
    amountInUSD: 60000,
  },
]

export const revalidate = 30 // 100seconds

export const dynamicParams = true

export async function generateStaticParams(): Promise<{ username: string }[]> {
  const usernames = await getUsersUsernames()
  const params = usernames.map((username) => ({ username }))
  return params
}

// cookies structure
/*
  {
    sellStep: '1', '2', '3', '4'
    tokenIn: {address: '0x', symbol: 'USDT', name: 'Tether'}
    tokenOut: {address: '0x', symbol: 'USDT', name: 'Tether'}
    amountIn: '0.0'
  }
*/
async function page({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = cookies()
  const sellStep: string = (await cookiesStore).get('sellStep')?.value ?? '1'
  console.log({ sellStep })
  //TODO: FETCH SOLANA PRICE
  //TODO: FETCH USER BALANCE
  //TODO: FETCH ASSETS PRICES

  // Those values are common for all the users

  if (sellStep === '1') {
    return (
      <section className={style.main}>
        <SearchableAsset assets={assets} username={username} />
      </section>
    )
  } else if (sellStep === '2') {
    return (
      <main className={style.amountMain}>
        <AmountInformation />
        <SelectAmount />
        <Keyboard />
      </main>
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
