'use client'

import style from './followsHeader.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface FollowsHeaderProps {
  username: string
}

function FollowsHeader({ username }: FollowsHeaderProps) {
  const pathname = usePathname()

  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <Link href={`/profile/${username}/following`} className={pathname.endsWith('/following') ? style.buttonActive : style.buttonInactive}>
          Following
        </Link>
        <Link href={`/profile/${username}/followers`} className={pathname.endsWith('/followers') ? style.buttonActive : style.buttonInactive}>
          Followers
        </Link>
        <button className={pathname.endsWith('/projects') ? style.buttonActive : style.buttonInactive}>Projects</button>
      </div>
      <input className={style.input} type="search" name="" placeholder="Find a person" id="" />
    </div>
  )
}

export default FollowsHeader
