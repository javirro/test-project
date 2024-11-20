import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import MarketInfoContainer from '../../components/marketInfoContainer/MarketInfoContainer'
// import CommentsContainer from '../../components/commentsContainer/CommentsContainer'
// import CreatedBy from '../../components/createdBy/CreatedBy'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import TokenDetails from '../../components/tokenDetails/TokenDetails'
import { Suspense } from 'react'
import { getProjectByTokenAddress } from '@/dataFetching/projects/getProject'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
}

async function page({ params }: PageProps) {
  const resolvedParams = await params
  const tokenAddress = resolvedParams.tokenAddress
  console.log('Overview page -> tokenAddress', tokenAddress)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Overview tokenAddress={tokenAddress} />
    </Suspense>
  )
}

const Overview = async ({ tokenAddress }: { tokenAddress: string }) => {
  const projectInfo = await getProjectByTokenAddress(tokenAddress)
  const { tags, creationDate, creatorAddress } = projectInfo
  console.log('Overview -> projectInfo', projectInfo, creationDate, creatorAddress)
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <TokenDetails project={projectInfo} />
      <MarketInfoContainer project={projectInfo} />
      <TagsContainer tags={tags} />
      {/* <CommentsContainer tokenAddress={tokenAddress} />
      <CreatedBy createdOn={creationDate} creatorAddress={creatorAddress} /> */}
    </section>
  )
}

export default page
