import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import MarketInfoContainer from '../../components/marketInfoContainer/MarketInfoContainer'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'
import CreatedBy from '../../components/createdBy/CreatedBy'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import TokenDetails from '../../components/tokenDetails/TokenDetails'
import { Suspense } from 'react'
import { getProjectByTokenAddress, getAllProjectAddresses } from '@/dataFetching/projects/getProject'

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
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <TokenDetails project={projectInfo} />
      <MarketInfoContainer project={projectInfo} />
      <TagsContainer tags={tags} />
      <CommentsContainer tokenAddress={tokenAddress} />
      <CreatedBy createdOn={creationDate} creatorUsername={creatorUsername} />
    </section>
  )
}

export default page
