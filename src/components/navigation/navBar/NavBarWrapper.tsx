'use client'

import { usePathname, useRouter } from 'next/navigation'
import ProfileNavBar from './navBars/ProfileNavBar'
import ProjectPublicNavBar from './navBars/ProjectPublicNavBar'
import SegmentedCustom from '../segmentedCustom/SegmentedCustom'

function NavBarWrapper() {
  const pathname = usePathname()
  const router = useRouter()

  const handleBackClick = () => {
    router.push('/')
  }

  return (
    <nav style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
      {pathname === '/create-project' && <ProfileNavBar onBackClick={handleBackClick} />}
      {(pathname === '/token-details/overview' || pathname === '/token-details/comments' || pathname === '/token-details/about') && <ProjectPublicNavBar />}
      {pathname === '/' && <SegmentedCustom />}
    </nav>
  )
}

export default NavBarWrapper
