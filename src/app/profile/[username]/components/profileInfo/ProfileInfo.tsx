import style from './profileInfo.module.css'
import ProfileFollowersBox from './ProfileFollowersBox'
import ProfileFollowingBox, { ProfileBoxDataFallback } from './ProfileFollowingBox'
import ProfileProjectsBox from './ProfileProjectsBox'
import { Suspense } from 'react'
import { getUserCreationDate } from '@/dataFetching/users/getUserImage'
import FollowButton from '../FollowButton/FollowButton'

function ProfileInfo({ username }: { username: string }) {
  return (
    <section className={style.main}>
      <div className={style.usernameSection}>
        <div className={style.usernameDiv}>
          <div className={style.username}>
            <p className={style.usernameText}>{username}</p>
            <img src="/verifiedIcon.svg" alt="verified" />
          </div>
          <ProfileCreationDate username={username} />
        </div>
        <FollowButton username={username}/>
      </div>
      <div className={style.userInfoSection}>
        <Suspense fallback={<ProfileBoxDataFallback text="Followers" />}>
          <ProfileFollowersBox username={username} key={"followers-box"} />
        </Suspense>
        <Suspense fallback={<ProfileBoxDataFallback text="Following" />}>
          <ProfileFollowingBox username={username} key={"following-box"} />
        </Suspense>
        <Suspense fallback={<ProfileBoxDataFallback text="Projects" />}>
          <ProfileProjectsBox username={username} key={"projects-box"} />
        </Suspense>
      </div>
    </section>
  )
}

export default ProfileInfo

const ProfileCreationDate = async ({ username }: { username: string }) => {
  const creationDate = await getUserCreationDate(username)
  const msCreatedOn = creationDate * 1000
  const createdDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
  }).format(new Date(msCreatedOn))
  return <p className={style.usernameSubText}>joined on {createdDate}</p>
}
