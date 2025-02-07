import FollowsHeader from '../components/followsHeader/FollowsHeader'
import Following from './components/following/Following'

import style from './page.module.css'

interface PageProps {
  params: Promise<{ username: string }>
}

async function page({ params }: PageProps) {
  const { username } = await params

  return (
    <section className={style.main}>
      <FollowsHeader username={username} />
      <Following />
    </section>
  )
}

export default page
