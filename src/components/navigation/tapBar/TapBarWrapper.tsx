'use client'

import { usePathname } from 'next/navigation'
import TapBar from './tapBar'
import TapBarTokenActions from './variants/TapBarTokenActions'
import style from './tapBarWrapper.module.css'

function TapBarWrapper() {
  const pathname = usePathname()

  return (
    <div className={style.mainSelector}>
      {pathname === '/' && <TapBar />}
      {pathname === '/token-details/overview' && <TapBarTokenActions />}
    </div>
  )
}

export default TapBarWrapper
