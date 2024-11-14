import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import CommentsContainer from '../overview/components/commentsContainer/CommentsContainer'
import style from './page.module.css'

function page() {
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <CommentsContainer />
    </section>
  )
}

export default page
