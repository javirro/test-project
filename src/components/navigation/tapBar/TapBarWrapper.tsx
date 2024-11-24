'use client'

import { usePathname } from 'next/navigation'
import TapBarTokenActions from './variants/TapBarTokenActions'
import TapBarChat from './variants/TapBarChat'
import style from './tapBarWrapper.module.css'
import DynamicTapbarNoSSR from './DynamicTapbarNoSSR'

function TapBarWrapper() {
  const pathname = usePathname()

  return (
    <div className={style.mainSelector}>
      {pathname === '/' && <DynamicTapbarNoSSR />}
      {pathname.startsWith('/token-details') && !pathname.endsWith('/comments') && <TapBarTokenActions />}
      {pathname.endsWith('/comments') && <TapBarChat />}
    </div>
  )
}

export default TapBarWrapper
