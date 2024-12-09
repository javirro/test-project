import style from './page.module.css'
import AssetsListActivity from './components/AssetsListActivity'
import { assetsActivity } from '@/utils/fakeAssetsList'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { User } from '@/types/user'
import { Suspense } from 'react'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { getSolanaBalance } from '@/contracts/getBalances'

interface PageProps {
  params: Promise<{ username: string }>
}

async function page({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = await cookies()
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  if (!user) notFound()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActivityBody username={username} userAddress={user.address} />
    </Suspense>
  )
}

export default page

const ActivityBody = async ({ username, userAddress }: { username: string; userAddress: string }) => {
  const solanaPrice: number = (await getSolanaPrice()).price
  const { solBalance } = await getSolanaBalance(userAddress as string)

  return (
    <section className={style.main}>
      <p className={style.text}>Today</p>
      <AssetsListActivity assets={assetsActivity} solBalance={solBalance} solPrice={solanaPrice} username={username} />
      <p className={style.text}>Nov 1, 2024</p>
      <AssetsListActivity assets={assetsActivity} solBalance={solBalance} solPrice={solanaPrice} username={username} />
      Activity section: {username}
    </section>
  )
}
