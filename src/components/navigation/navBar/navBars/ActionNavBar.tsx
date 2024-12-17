'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import style from './navBars.module.css'
import { useNavBarStore } from '@/app/store/navBarStore'

function ActionNavBar() {
  const { actionNavBarMessage, setActionNavBarMessage } = useNavBarStore()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const currentPath = usePathname()

  useEffect(() => {
    if(currentPath.includes('/activity')) setActionNavBarMessage('Last transactions')
    setMounted(true)
  }, [currentPath, setActionNavBarMessage])

  const handleBackNavigation = () => {
    const newPath = currentPath.split('/').slice(0, -1).join('/')
    router.push(newPath)
  }

  if (!mounted) return null

  return (
    <div className={style.profileNavBarBack}>
      <div className={style.profileNavBarNameSection} onClick={handleBackNavigation} style={{ cursor: 'pointer' }}>
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <p className={style.actionNavBarText}>{actionNavBarMessage}</p>
      </div>
    </div>
  )
}

export default ActionNavBar
