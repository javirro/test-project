'use client'

import { usePathname } from 'next/navigation'
import ProfileNavBar from './navBars/ProfileNavBar'

function NavBarWrapper() {
  const pathname = usePathname()

  return <nav style={{ width: '100%' }}>{pathname === '/create-project' && <ProfileNavBar />}</nav>
}

export default NavBarWrapper
