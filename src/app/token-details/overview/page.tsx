import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import MarketInfoContainer from '../components/marketInfoContainer/MarketInfoContainer'
import CommentsContainer from '../components/commentsContainer/CommentsContainer'
import CreatedBy from '../components/createdBy/CreatedBy'
import TagsContainer from '../components/tagsContainer/TagsContainer'
import TokenDetails from '../components/tokenDetails/TokenDetails'


function page() {
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <TokenDetails />
      <MarketInfoContainer />
      <TagsContainer />
      <CommentsContainer />
      <CreatedBy />
    </section>
  )
}

export default page
