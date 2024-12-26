import style from './profileHeader.module.css'

function ProfileHeader() {
  return (
    <section className={style.main}>
      <img className={style.banner} src="/header_banner.svg" alt="header banner" />
      <img className={style.profileImage} src="/Image.png" alt="header banner" />
    </section>
  )
}

export default ProfileHeader
