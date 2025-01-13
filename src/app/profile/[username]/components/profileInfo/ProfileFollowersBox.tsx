import Link from 'next/link'
import style from './profileInfo.module.css'
import { getFollowersOrFollowedCount } from '@/dataFetching/followers/getFollowersAndFollowed'

const ProfileFollowersBox = async ({ username }: { username: string }) => {
  const link = `/profile/${username}/followers`
  const followersFlag = true
  const followers = await getFollowersOrFollowedCount(username, followersFlag)
  return (
    <Link href={link} className={style.userInfoSectionDiv}>
      <p className={style.userInfoSectionDivText}>{followers}</p>
      <p className={style.userInfoSectionDivAmount}>{'Followers'}</p>
    </Link>
  )
}

export default ProfileFollowersBox
