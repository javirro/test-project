import styles from './walletPage.module.css'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import WalletBalancesBody from './components/WalletBalancesBody/WalletBalancesBody'
import { Suspense } from 'react'

interface PageProps {
  params: Promise<{ username: string }>
}

const WalletPage = async ({ params }: PageProps) => {
  const { username } = await params
  const solanaPrice: number = (await getSolanaPrice()).price

  return (
    <section className={styles.wallet}>
      <Suspense fallback={<div>Loading...</div>}>
        <WalletBalancesBody priceSolana={solanaPrice} username={username} />
      </Suspense>
    </section>
  )
}

export default WalletPage
