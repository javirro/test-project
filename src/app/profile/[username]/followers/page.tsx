import Followers from './components/followers/Followers'
import FollowsHeader from '../components/followsHeader/FollowsHeader'

import style from './page.module.css'

interface PageProps {
  params: Promise<{ username: string }>
}

async function page({ params }: PageProps) {
  const { username } = await params
  return (
    <section className={style.main}>
      <FollowsHeader username={username} />
      <Followers />
    </section>
  )
}

export default page
