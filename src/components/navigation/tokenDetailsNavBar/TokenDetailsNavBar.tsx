'use client'

import style from './tokenDetailsNavBar.module.css'
import { usePathname, useRouter, useParams } from 'next/navigation'

enum NavigationOptions {
  Overview = 'overview',
  Comments = 'comments',
  About = 'about',
}

function TokenDetailsNavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { tokenAddress } = useParams<{ tokenAddress: string }>()
  const navigateTo = (path: string) => {
    router.push(path)
  }

  let navigationOption = 'overview'
  if (pathname.includes(NavigationOptions.Comments)) {
    navigationOption = NavigationOptions.Comments
  } else if (pathname.includes(NavigationOptions.About)) {
    navigationOption = NavigationOptions.About
  }

  return (
    <nav className={style.nav}>
      <button
        onClick={() => navigateTo(`/token-details/${tokenAddress}/overview`)}
        className={navigationOption === NavigationOptions.Overview ? style.buttonSelected : style.button}
      >
        Overview
      </button>
      <button
        onClick={() => navigateTo(`/token-details/${tokenAddress}/comments`)}
        className={navigationOption === NavigationOptions.Comments ? style.buttonSelected : style.button}
      >
        Comments
      </button>
      <button
        onClick={() => navigateTo(`/token-details/${tokenAddress}/about`)}
        className={navigationOption === NavigationOptions.About ? style.buttonSelected : style.button}
      >
        About
      </button>
    </nav>
  )
}

export default TokenDetailsNavBar
