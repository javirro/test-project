import FollowsHeader from './components/followsHeader/FollowsHeader'
import Following from './components/following/Following'

import style from './page.module.css'

function page() {
  return (
    <section className={style.main}>
      <FollowsHeader />
      <Following />
    </section>
  )
}

export default page
