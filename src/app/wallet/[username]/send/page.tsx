import style from './page.module.css'
import SearchableAsset from './components/searchableAsset/SearchableAsset'
import { assets } from '@/utils/fakeAssetsList'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'

interface PageProps {
  params: Promise<{ username: string }>
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
