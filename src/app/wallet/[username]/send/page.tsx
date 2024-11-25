import style from './page.module.css'
import SearchableAsset from './components/searchableAsset/SearchableAsset'

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

export async function generateStaticParams(): Promise<{ username: string }[]> {
  return []
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
