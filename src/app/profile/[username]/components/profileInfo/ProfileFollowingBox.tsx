import Link from 'next/link'
import style from './profileInfo.module.css'
import { getFollowersOrFollowedCount } from '@/dataFetching/followers/getFollowersAndFollowed'

const ProfileFollowingBox = async ({ username }: { username: string }) => {
  const link = `/profile/${username}/following`
  const followersFlag = false
  const followed = await getFollowersOrFollowedCount(username, followersFlag)
  return (
    <Link href={link} className={style.userInfoSectionDiv}>
      <p className={style.userInfoSectionDivText}>{followed}</p>
      <p className={style.userInfoSectionDivAmount}>{'Following'}</p>
    </Link>
  )
}

export default ProfileFollowingBox

export const ProfileBoxDataFallback = ({ text }: { text: string }) => {
  return (
    <div className={style.userInfoSectionDiv}>
      <p className={style.userInfoSectionDivText}>...</p>
      <p className={style.userInfoSectionDivAmount}>{text}</p>
    </div>
  )
}
