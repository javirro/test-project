'use client'

import { usePathname, useRouter } from 'next/navigation'
import ProfileNavBar from './navBars/ProfileNavBar'
import ProjectPublicNavBar from './navBars/ProjectPublicNavBar'
import SegmentedCustom from '../segmentedCustom/SegmentedCustom'
import ActionNavBar from './navBars/ActionNavBar'

function NavBarWrapper() {
  const pathname = usePathname()
  const router = useRouter()

  const handleBackClick = () => {
    router.push('/')
  }

  return (
    <nav style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
      {pathname === '/create-project' && <ProfileNavBar onBackClick={handleBackClick} />}
      {pathname.startsWith('/token-details') && <ProjectPublicNavBar onBackClick={handleBackClick} />}
      {pathname === '/' && <SegmentedCustom />}
      {pathname.endsWith('/receive') || pathname.endsWith('/activity') ? <ActionNavBar /> : null}
    </nav>
  )
}

export default NavBarWrapper
