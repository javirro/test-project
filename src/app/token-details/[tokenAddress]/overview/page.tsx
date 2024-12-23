import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import MarketInfoContainer from '../../components/marketInfoContainer/MarketInfoContainer'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'
import CreatedBy from '../../components/createdBy/CreatedBy'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import TokenDetails from '../../components/tokenDetails/TokenDetails'
import { Suspense } from 'react'
import { getProjectByTokenAddress, getAllProjectAddresses } from '@/dataFetching/projects/getProject'
import { getUserImage } from '@/dataFetching/users/getUserImage'
import { getProjectMarketcap } from '@/dataFetching/prices/getFullProjectsListWithMarketcap'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
}

export const dynamicParams = true

export async function generateStaticParams() {
  const addresses = await getAllProjectAddresses()
  return addresses.map((ad) => ({
    tokenAddress: ad,
  }))
}

async function page({ params }: PageProps) {
  const { tokenAddress } = await params

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Overview tokenAddress={tokenAddress} />
    </Suspense>
  )
}

const Overview = async ({ tokenAddress }: { tokenAddress: string }) => {
  const projectInfo = await getProjectByTokenAddress(tokenAddress)
  const { tags, creationDate, creatorUsername } = projectInfo
  const creatorImage = await getUserImage(creatorUsername)
  const { position, marketCapData } = await getProjectMarketcap(tokenAddress)
  const price = marketCapData.currentPrice
  return (
    <section className={style.main}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }}>
        <TokenDetailsNavBar />
        <TokenDetails project={projectInfo} position={position} price={price}/>
        <MarketInfoContainer project={projectInfo} marketcap={marketCapData.marketCap}/>
        <TagsContainer tags={tags} />
        <CommentsContainer tokenAddress={tokenAddress} />
        <CreatedBy createdOn={creationDate} creatorUsername={creatorUsername} creatorImage={creatorImage} />
      </div>
    </section>
  )
}

export default page
