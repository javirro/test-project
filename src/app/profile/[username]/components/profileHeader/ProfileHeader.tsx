'use client'

import useUser from '@/hooks/useUser'
import style from './profileHeader.module.css'

function ProfileHeader() {
  const { user } = useUser()
  const imgToUse = user?.image ? user.image : '/Image.png'
  if (!user?.username) return null
  return (
    <section className={style.main}>
      <img className={style.banner} src="/header_banner.svg" alt="header banner" />
      <img className={style.profileImage} src={imgToUse} alt="User profile img" />
    </section>
  )
}

export default ProfileHeader
