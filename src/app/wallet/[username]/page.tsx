import WalletInformation from './components/walletInformation/WalletInformation'
import Asset from './components/Asset/Asset'
import styles from './walletPage.module.css'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'

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

export const revalidate = 30 // 100seconds

export const dynamicParams = true

export async function generateStaticParams(): Promise<{ username: string }[]> {
  const usernames = await getUsersUsernames()
  const params = usernames.map((username) => ({ username }))
  return params
}

const Wallet = async ({ params }: PageProps) => {
  const { username } = await params
  const solanaPrice: number = (await getSolanaPrice()).price

  return (
    <section className={styles.wallet}>
      <WalletInformation priceSolana={solanaPrice} />
      <div className={styles.myAssetsDiv}>
        <p className={styles.myAssetsText}>My assets (04)</p>
        <Asset asset={assets} />
      </div>
      Walelt section: {username}
    </section>
  )
}

export default Wallet
