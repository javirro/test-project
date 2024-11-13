'use client'

import style from './tokenDetailsNavBar.module.css'
import { usePathname } from 'next/navigation'

function TokenDetailsNavBar() {
  const pathname = usePathname()

  return (
    <nav className={style.nav}>
      <button className={pathname === '/token-details/overview' ? style.buttonSelected : style.button}>Overview</button>
      <button className={style.button}>Comments</button>
      <button className={style.button}>About</button>
    </nav>
  )
}

export default TokenDetailsNavBar
