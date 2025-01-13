import style from './profileInfo.module.css'
import ProfileFollowersBox from './ProfileFollowersBox'
import ProfileFollowingBox, { ProfileBoxDataFallback } from './ProfileFollowingBox'
import ProfileProjectsBox from './ProfileProjectsBox'
import { Suspense } from 'react'

function ProfileInfo({ username }: { username: string }) {
  return (
    <section className={style.main}>
      <div className={style.usernameSection}>
        <div className={style.usernameDiv}>
          <div className={style.username}>
            <p className={style.usernameText}>{username}</p>
            <img src="/verifiedIcon.svg" alt="verified" />
          </div>
          <p className={style.usernameSubText}>joined on 12/05/2023</p>
        </div>
        <button className={style.button}>Follow</button>
      </div>
      <div className={style.userInfoSection}>
        <Suspense fallback={<ProfileBoxDataFallback text="Followers" />}>
          <ProfileFollowersBox username={username} />
        </Suspense>
        <Suspense fallback={<ProfileBoxDataFallback text="Following" />}>
          <ProfileFollowingBox username={username} />
        </Suspense>
        <Suspense fallback={<ProfileBoxDataFallback text="Projects" />}>
          <ProfileProjectsBox username={username} />
        </Suspense>
      </div>
    </section>
  )
}

export default ProfileInfo
