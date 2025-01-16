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

  const showProjectPublicNavBar =
    (pathname.startsWith('/token-details') && !pathname.endsWith('/overview')) || pathname.endsWith('/comments') || pathname.endsWith('/about')

  const showBackToVideoNavBar = pathname.endsWith('/overview') || pathname.endsWith('/comments') || pathname.endsWith('/about')

  const showProfileNavBar =
    pathname === '/create-project' ||
    pathname.startsWith('/profile') ||
    pathname.endsWith('/explore') ||
    pathname.endsWith('/explore/top100') ||
    pathname.endsWith('/explore/top100/feed')

  return (
    <TanstackQueryProvider>
      <nav style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
        {showProfileNavBar && <ProfileNavBar />}
        {showProjectPublicNavBar && <ProjectPublicNavBar />}
        {showBackToVideoNavBar && <ProjectPublicNavBar text="Back to video" />}
        {showActionNavBar && <ActionNavBar />}
      </nav>
    </TanstackQueryProvider>
  )
}

export default NavBarWrapper
