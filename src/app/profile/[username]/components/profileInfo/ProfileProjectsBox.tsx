import Link from 'next/link'
import style from './profileInfo.module.css'
import { getProjectsCreatedByUser } from '@/dataFetching/users/getProjectsCreatedByUser'

const ProfileProjectsBox = async ({ username }: { username: string }) => {
  const link = `/profile/${username}/projects`
  const projects = await getProjectsCreatedByUser(username)
  const amount = projects?.length
  return (
    <Link href={link} className={style.userInfoSectionDiv}>
      <p className={style.userInfoSectionDivText}>{amount}</p>
      <p className={style.userInfoSectionDivAmount}>{'Projects'}</p>
    </Link>
  )
}

export default ProfileProjectsBox
