import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import MarketInfoContainer from '../../components/marketInfoContainer/MarketInfoContainer'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'
import CreatedBy from '../../components/createdBy/CreatedBy'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import TokenDetails from '../../components/tokenDetails/TokenDetails'


async function page({ params }: { params: { tokenAddress: string } }) {
  const tokenAddress = await params.tokenAddress
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <TokenDetails />
      <MarketInfoContainer />
      <TagsContainer />
      <CommentsContainer tokenAddress={tokenAddress}/>
      <CreatedBy />
    </section>
  )
}

export default page
