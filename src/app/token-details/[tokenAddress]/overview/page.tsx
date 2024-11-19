import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import MarketInfoContainer from '../../components/marketInfoContainer/MarketInfoContainer'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'
import CreatedBy from '../../components/createdBy/CreatedBy'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import TokenDetails from '../../components/tokenDetails/TokenDetails'
import { Suspense } from 'react'
import { getProjectByTokenAddress } from '@/dataFetching/projects/getProject'

async function page({ params }: { params: { tokenAddress: string } }) {
  const tokenAddress = await params.tokenAddress
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Overview tokenAddress={tokenAddress} />
    </Suspense>
  )
}

const Overview = async ({ tokenAddress }: { tokenAddress: string }) => {
  const projectInfo = await getProjectByTokenAddress(tokenAddress)
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <TokenDetails project={projectInfo} />
      <MarketInfoContainer project={projectInfo} />
      <TagsContainer tags={projectInfo.tags} />
      <CommentsContainer tokenAddress={tokenAddress} />
      <CreatedBy />
    </section>
  )
}

export default page
