'use client'

import { usePathname, useRouter } from 'next/navigation'
import ProfileNavBar from './navBars/ProfileNavBar'
import ProjectPublicNavBar from './navBars/ProjectPublicNavBar'
import SegmentedCustom from '../segmentedCustom/SegmentedCustom'
import ActionNavBar from './navBars/ActionNavBar'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'

function NavBarWrapper() {
  const pathname = usePathname()
  const router = useRouter()

  const handleBackClick = () => {
    router.push('/')
  }

  const showActionNavBar = pathname.endsWith('/receive') || pathname.endsWith('/activity') || pathname.endsWith('/send') || pathname.endsWith('/send/address')

  return (
    <TanstackQueryProvider>
      <nav style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
        {pathname === '/create-project' && <ProfileNavBar onBackClick={handleBackClick} />}
        {pathname.startsWith('/token-details') && <ProjectPublicNavBar onBackClick={handleBackClick} />}
        {pathname === '/' && <SegmentedCustom />}
        {showActionNavBar && <ActionNavBar />}
      </nav>
    </TanstackQueryProvider>
  )
}

export default NavBarWrapper
