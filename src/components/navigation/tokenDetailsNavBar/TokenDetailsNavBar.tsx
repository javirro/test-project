'use client'

import Link from 'next/link'
import style from './tokenDetailsNavBar.module.css'
import { usePathname, useParams } from 'next/navigation'

enum NavigationOptions {
  Overview = 'overview',
  Comments = 'comments',
  About = 'about',
}

function TokenDetailsNavBar() {
  const pathname = usePathname()
  const { tokenAddress } = useParams<{ tokenAddress: string }>()

  let navigationOption = 'overview'
  if (pathname.includes(NavigationOptions.Comments)) {
    navigationOption = NavigationOptions.Comments
  } else if (pathname.includes(NavigationOptions.About)) {
    navigationOption = NavigationOptions.About
  }

  return (
    <nav className={style.nav}>
      <Link href={`/token-details/${tokenAddress}/overview`} className={navigationOption === NavigationOptions.Overview ? style.buttonSelected : style.button}>
        Overview
      </Link>
      <Link href={`/token-details/${tokenAddress}/comments`} className={navigationOption === NavigationOptions.Comments ? style.buttonSelected : style.button}>
        Comments
      </Link>
      <Link href={`/token-details/${tokenAddress}/about`} className={navigationOption === NavigationOptions.About ? style.buttonSelected : style.button}>
        About
      </Link>
    </nav>
  )
}

export default TokenDetailsNavBar
