import styles from './walletPage.module.css'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import WalletBalancesBody from './components/WalletBalancesBody/WalletBalancesBody'

interface PageProps {
  params: Promise<{ username: string }>
}

const WalletPage = async ({ params }: PageProps) => {
  const { username } = await params
  const solanaPrice: number = (await getSolanaPrice()).price

  return (
    <section className={styles.wallet}>
      <TanstackQueryProvider>
        <WalletBalancesBody priceSolana={solanaPrice} username={username} />
      </TanstackQueryProvider>
    </section>
  )
}

export default WalletPage
