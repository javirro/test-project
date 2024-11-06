'use client'

import styles from './page.module.css'
import TapBar from '@/components/navigation/tapBar/tapBar'
import NavBarWrapper from '@/components/navigation/navBar/NavBarWrapper'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBarWrapper />
      <TapBar />
    </div>
  )
}
