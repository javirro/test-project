import Link from 'next/link'
import style from './profileInfo.module.css'

const ProfileProjectsBox = async ({ username }: { username: string }) => {
  const link = `/profile/${username}/projects`
  const amount = 0
  return (
    <Link href={link} className={style.userInfoSectionDiv}>
      <p className={style.userInfoSectionDivText}>{amount}</p>
      <p className={style.userInfoSectionDivAmount}>{'Projects'}</p>
    </Link>
  )
}

export default ProfileProjectsBox
