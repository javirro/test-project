import style from './page.module.css'
import SearchableAsset from './components/searchableAsset/SearchableAsset'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { assets } from '@/utils/fakeAssetsList'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'

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

async function page({ params }: PageProps) {
  const { username } = await params
  const solanaPrice: number = (await getSolanaPrice()).price
  return (
    <section className={style.main}>
      <SearchableAsset assets={assets} username={username} solanaPrice={solanaPrice} />
    </section>
  )
}

export default page
