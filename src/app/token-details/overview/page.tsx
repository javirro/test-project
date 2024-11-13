import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import TokenDetails from './components/tokenDetails/TokenDetails'
import MarketInfoContainer from './components/marketInfoContainer/MarketInfoContainer'
import TagsContainer from './components/tagsContainer/TagsContainer'
import CommentsContainer from './components/commentsContainer/CommentsContainer'
import CreatedBy from './components/createdBy/CreatedBy'
import style from './page.module.css'

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
