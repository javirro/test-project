import ProfileHeader from './components/profileHeader/ProfileHeader'
import style from './page.module.css'

function page() {
  return (
    <main className={style.main}>
      <ProfileHeader />
    </main>
  )
}

export default page
