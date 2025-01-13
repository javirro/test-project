import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import ProfileHeader from './components/profileHeader/ProfileHeader'
import ProfileInfo from './components/profileInfo/ProfileInfo'
import UserProjects from './components/userProjects/UserProjects'
import style from './page.module.css'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams(): Promise<{ username: string }[]> {
  const usernames = await getUsersUsernames()
  const usernameParams = usernames.map((u) => ({
    username: u,
  }))
  return usernameParams
}

async function page({ params }: PageProps) {
  const { username } = await params
  return (
    <main className={style.main}>
      <ProfileHeader />
      <ProfileInfo username={username}/>
      <UserProjects />
    </main>
  )
}

export default page
