'use client'

import style from './tokenDetailsNavBar.module.css'
import { usePathname, useRouter } from 'next/navigation'

function TokenDetailsNavBar() {
  const pathname = usePathname()
  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <nav className={style.nav}>
      <button onClick={() => navigateTo('/token-details/overview')} className={pathname === '/token-details/overview' ? style.buttonSelected : style.button}>
        Overview
      </button>
      <button onClick={() => navigateTo('/token-details/comments')} className={pathname === '/token-details/comments' ? style.buttonSelected : style.button}>
        Comments
      </button>
      <button onClick={() => navigateTo('/token-details/about')} className={pathname === '/token-details/about' ? style.buttonSelected : style.button}>
        About
      </button>
    </nav>
  )
}

export default TokenDetailsNavBar
