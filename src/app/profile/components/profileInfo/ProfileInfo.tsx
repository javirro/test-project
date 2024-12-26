'use client'

import { useUserStore } from '@/app/store/userStore'
import Link from 'next/link'
import style from './profileInfo.module.css'

const userInfo = [
  {
    amount: '1,456',
    value: 'Following',
    link: '/profile/following',
  },
  {
    amount: '56K',
    value: 'Followers',
    link: '/profile/followers',
  },
  {
    amount: '05',
    value: 'Projects',
    link: '/profile/projects',
  },
]

function ProfileInfo() {
  const { user } = useUserStore()

  return (
    <section className={style.main}>
      <div className={style.usernameSection}>
        <div className={style.usernameDiv}>
          <div className={style.username}>
            <p className={style.usernameText}>{user?.username ? user?.username : '@alexp24'}</p>
            <img src="/verifiedIcon.svg" alt="" />
          </div>
          <p className={style.usernameSubText}>joined on 12/05/2023</p>
        </div>
        <button className={style.button}>Follow</button>
      </div>
      <div className={style.userInfoSection}>
        {userInfo.map((item) => (
          <Link href={item.link} className={style.userInfoSectionDiv} key={item.value}>
            <p className={style.userInfoSectionDivText}>{item.amount}</p>
            <p className={style.userInfoSectionDivAmount}>{item.value}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProfileInfo
