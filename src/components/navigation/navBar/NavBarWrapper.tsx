'use client'

import { usePathname, useRouter } from 'next/navigation'
import ProfileNavBar from './navBars/ProfileNavBar'
import ProjectPublicNavBar from './navBars/ProjectPublicNavBar'
import SegmentedCustom from '../segmentedCustom/SegmentedCustom'
import ActionNavBar from './navBars/ActionNavBar'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import { getCookie } from 'cookies-next/client'

function NavBarWrapper() {
  const pathname = usePathname()
  const router = useRouter()
  const sendCookie = getCookie('sendStep')
  const sellCookie = getCookie('sellStep')
  const sendStep = sendCookie ? parseInt(sendCookie) : 0
  const sellStep = sellCookie ? parseInt(sellCookie) : 0
  const handleBackClick = () => {
    router.push('/')
  }

  const showActionNavBar =
    pathname.endsWith('/receive') ||
    pathname.endsWith('/activity') ||
    (pathname.endsWith('/send') && sendStep < 4) ||
    (pathname.endsWith('/sell') && sellStep < 4)

  return (
    <TanstackQueryProvider>
      <nav style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
        {pathname === '/create-project' && <ProfileNavBar />}
        {pathname.startsWith('/token-details') && <ProjectPublicNavBar onBackClick={handleBackClick} />}
        {pathname.endsWith('/profile') && <ProfileNavBar onBackClick={handleBackClick} />}
        {pathname.endsWith('/explore') && <ProfileNavBar onBackClick={handleBackClick} />}
        {pathname === '/' && <SegmentedCustom />}
        {showActionNavBar && <ActionNavBar />}
      </nav>
    </TanstackQueryProvider>
  )
}

export default NavBarWrapper
