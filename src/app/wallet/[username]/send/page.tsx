import style from './page.module.css'
import SearchableAsset from './components/searchableAsset/SearchableAsset'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'

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

async function page({ params }: PageProps) {
  const { username } = await params

  return (
    <section className={style.main}>
      <SearchableAsset assets={assets} username={username} />
    </section>
  )
}

export default page
