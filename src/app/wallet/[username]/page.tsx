import styles from './walletPage.module.css'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import WalletBalancesBody from './components/WalletBalancesBody/WalletBalancesBody'

interface PageProps {
  params: Promise<{ username: string }>
}

export const revalidate = 30 // 100seconds

export const dynamicParams = true

export async function generateStaticParams(): Promise<{ username: string }[]> {
  const usernames = await getUsersUsernames()
  const params = usernames.map((username) => ({ username }))
  return params
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
