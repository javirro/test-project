'use client'

import { usePathname } from 'next/navigation'
import TapBar from './tapBar'
import TapBarTokenActions from './variants/TapBarTokenActions'
import TapBarChat from './variants/TapBarChat'
import style from './tapBarWrapper.module.css'
import TapBarWallet from './variants/TapBarWallet'

function TapBarWrapper() {
  const pathname = usePathname()

  return (
    <div className={style.mainSelector}>
      {pathname === '/' || (pathname.startsWith('/wallet') && !pathname.endsWith('/receive') && <TapBar />)}
      {pathname.startsWith('/token-details') && !pathname.endsWith('/comments') && <TapBarTokenActions />}
      {pathname.endsWith('/comments') && <TapBarChat />}
      {pathname.startsWith('/wallet') && pathname.endsWith('/receive') && <TapBarWallet />}
    </div>
  )
}

export default TapBarWrapper
