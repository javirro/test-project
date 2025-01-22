'use client'

import useUser from '@/hooks/useUser'
import style from '../profileInfo/profileInfo.module.css'
import { handleFollow } from '@/dataFetching/followers/handleFollow'

const FollowButton = ({ username }: { username: string }) => {
  const { user, token } = useUser()
  const personWhoStartFollowing = user?.username
  const isMyProfile = personWhoStartFollowing?.toLowerCase() === username.toLowerCase()
  if(!personWhoStartFollowing) return null
  return isMyProfile ? null : (
    <button className={style.button} onClick={() => handleFollow(personWhoStartFollowing, username, token, user?.telegramId)}>
      Follow
    </button>
  )
}

export default FollowButton
