import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import CommentsContainer from '../components/commentsContainer/CommentsContainer'

function page() {
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <CommentsContainer />
    </section>
  )
}

export default page
