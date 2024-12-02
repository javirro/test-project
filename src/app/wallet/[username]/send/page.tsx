import style from './page.module.css'
import SearchableAsset from './components/searchableAsset/SearchableAsset'
import { assets } from '@/utils/fakeAssetsList'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { User } from '@/types/user'
import { getSolanaBalance } from '@/contracts/getBalances'
import { Suspense } from 'react'

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
      <SendBodyComponent username={username} userAddress={user.address} sendStep={'1'} />
    </Suspense>
  )
}

export default page

const SendBodyComponent = async ({ username, userAddress }: { sendStep: string; username: string; userAddress: string }) => {
  const solanaPrice: number = (await getSolanaPrice()).price
  const { solBalance } = await getSolanaBalance(userAddress as string)
  return (
    <section className={style.main}>
      <SearchableAsset assets={assets} username={username} solanaPrice={solanaPrice} solanaBalance={solBalance} />
    </section>
  )
}
