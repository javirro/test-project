import WalletInformation from './components/walletInformation/WalletInformation'
import Asset from './components/Asset/Asset'
import styles from './walletPage.module.css'

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
const Wallet = async ({ params }: PageProps) => {
  const { username } = await params
  return (
    <section className={styles.wallet}>
      <WalletInformation amount={4980} gains={251} username={username} />
      <div className={styles.myAssetsDiv}>
        <p className={styles.myAssetsText}>My assets (04)</p>
        <Asset asset={assets} />
      </div>
      Walelt section: {username}
    </section>
  )
}

export default Wallet
