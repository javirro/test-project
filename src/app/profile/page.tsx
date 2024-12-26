import ProfileHeader from './components/profileHeader/ProfileHeader'
import ProfileInfo from './components/profileInfo/ProfileInfo'
import UserProjects from './components/userProjects/UserProjects'
import style from './page.module.css'

function page() {
  return (
    <main className={style.main}>
      <ProfileHeader />
      <ProfileInfo />
      <UserProjects />
    </main>
  )
}

export default page
