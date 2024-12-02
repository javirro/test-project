import styles from './walletPage.module.css'
import WalletBalancesBody from './components/WalletBalancesBody/WalletBalancesBody'
import { Suspense } from 'react'

interface PageProps {
  params: Promise<{ username: string }>
}

const WalletPage = async ({ params }: PageProps) => {
  const { username } = await params

  return (
    <section className={styles.wallet}>
      <Suspense fallback={<div>Loading...</div>}>
        <WalletBalancesBody username={username} />
      </Suspense>
    </section>
  )
}

export default WalletPage
