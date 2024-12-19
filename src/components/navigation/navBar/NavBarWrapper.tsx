'use client'

import { usePathname } from 'next/navigation'
import ProfileNavBar from './navBars/ProfileNavBar'
import ProjectPublicNavBar from './navBars/ProjectPublicNavBar'
import ActionNavBar from './navBars/ActionNavBar'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import { getCookie } from 'cookies-next/client'

function NavBarWrapper() {
  const pathname = usePathname()
  const sendCookie = getCookie('sendStep')
  const sellCookie = getCookie('sellStep')
  const sendStep = sendCookie ? parseInt(sendCookie) : 0
  const sellStep = sellCookie ? parseInt(sellCookie) : 0

  const showActionNavBar =
    pathname.endsWith('/receive') ||
    pathname.endsWith('/activity') ||
    (pathname.endsWith('/send') && sendStep < 4) ||
    (pathname.endsWith('/sell') && sellStep < 4)

  return (
    <TanstackQueryProvider>
      <nav style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
        {pathname === '/create-project' && <ProfileNavBar />}
        {pathname.startsWith('/token-details') && <ProjectPublicNavBar />}
        {pathname.endsWith('/profile') && <ProfileNavBar />}
        {pathname.endsWith('/explore') && <ProfileNavBar />}
        {pathname.endsWith('/explore/top100') && <ProfileNavBar />}
        {pathname.endsWith('/explore/top100/feed') && <ProfileNavBar />}
        {/* {pathname === '/' && <SegmentedCustomWrapper />} */}
        {showActionNavBar && <ActionNavBar />}
      </nav>
    </TanstackQueryProvider>
  )
}

export default NavBarWrapper
