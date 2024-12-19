'use client'

import { usePathname } from 'next/navigation'
import TapBarTokenActions from './variants/TapBarTokenActions'
import TapBarChat from './variants/TapBarChat'
import style from './tapBarWrapper.module.css'
import DynamicTapbarNoSSR from './DynamicTapbarNoSSR'
import TapBarWallet from './variants/TapBarWallet'
// import TapBarSendActions from './variants/TapBarSendActions'

function TapBarWrapper() {
  const pathname = usePathname()

  return (
    <div className={style.mainSelector}>
      {(pathname === '/' ||
        (pathname.startsWith('/wallet') &&
          !pathname.endsWith('/receive') &&
          !pathname.endsWith('/send') &&
          !pathname.endsWith('/sell') &&
          !pathname.endsWith('/address') &&
          !pathname.endsWith('/amount') &&
          !pathname.endsWith('/confirmation') &&
          !pathname.endsWith('/resume'))) && <DynamicTapbarNoSSR />}
      {pathname.startsWith('/token-details') && !pathname.endsWith('/comments') && <TapBarTokenActions />}
      {pathname.endsWith('/comments') && <TapBarChat />}
      {pathname.startsWith('/wallet') && pathname.endsWith('/receive') && <TapBarWallet />}
      {pathname.startsWith('/explore') && <DynamicTapbarNoSSR />}
      {pathname.startsWith('/explore/top100/feed') && <DynamicTapbarNoSSR />}
      {/* {pathname.startsWith('/wallet') && pathname.endsWith('/address') && <TapBarSendActions />} */}
    </div>
  )
}

export default TapBarWrapper
