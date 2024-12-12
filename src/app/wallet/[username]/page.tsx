import styles from './walletPage.module.css'
import WalletBalancesBody from './components/WalletBalancesBody/WalletBalancesBody'
import { Suspense } from 'react'
import SekeletonLoaderWallet from './components/skeletonLoaderWallet/SekeletonLoaderWallet'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams() {
  const usernames = await getUsersUsernames()
  return usernames.map((u) => ({
    username: u,
  }))
}

export const revalidate = 60 // revalidate each minute

const WalletPage = async ({ params }: PageProps) => {
  const { username } = await params

  return (
    <section className={styles.wallet}>
      <Suspense fallback={<SekeletonLoaderWallet />}>
        <WalletBalancesBody username={username} />
      </Suspense>
    </section>
  )
}

export default WalletPage
