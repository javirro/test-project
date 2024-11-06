'use client'

import styles from './page.module.css'
import TapBar from '@/components/navigation/tapBar/tapBar'
import NavBarWrapper from '@/components/navigation/navBar/NavBarWrapper'
import Toast from '@/components/status/Toast'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBarWrapper />
      <Toast text="Insuficient funds, this transaction will likey fall if submitted" />
      <TapBar />
    </div>
  )
}
