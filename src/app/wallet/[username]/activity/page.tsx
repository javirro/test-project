import style from './page.module.css'
import AssetsList from '../components/Asset/AssetsList'

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
    currency: 'Solana',
    network: 'SOL',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
  },
  {
    currency: 'Solana',
    network: 'SOL',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
  },
]

export async function generateStaticParams(): Promise<{ username: string }[]> {
  return []
}

async function page({ params }: PageProps) {
  const { username } = await params

  return (
    <section className={style.main}>
      <p className={style.text}>Today</p>
      <AssetsList asset={assets} />
      <p className={style.text}>Nov 1, 2024</p>
      <AssetsList asset={assets} />
      Activity section: {username}
    </section>
  )
}

export default page
