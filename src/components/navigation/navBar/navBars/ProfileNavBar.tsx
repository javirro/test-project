'use client'

import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ConfigButtonIcon from '@/images/navBar/components/configButton'
import Link from 'next/link'
import style from './navBars.module.css'
import { usePathname } from 'next/navigation'
import ArrowProfileButtonIcon from '@/images/status/components/arrowProfile'
import { useUserStore } from '@/app/store/userStore'

function ProfileNavBar() {
  const { user } = useUserStore()

  const pathname = usePathname()

  return (
    <div className={style.profileNavBar}>
      <Link href="/" prefetch={true} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none' }}>
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <p className={style.text}>Home</p>
      </Link>
      {pathname.startsWith('/profile') ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <ArrowProfileButtonIcon width="24" height="24" color="#707579" />
          <Link href={pathname.startsWith('/profile') ? `/profile/${user?.username}/config` : ''}>
            <ConfigButtonIcon width="24" height="24" color="#707579" />
          </Link>
        </div>
      ) : (
        <ConfigButtonIcon width="24" height="24" color="#707579" />
      )}
    </div>
  )
}

export default ProfileNavBar
