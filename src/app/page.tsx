'use client'

import styles from './page.module.css'
import MainCard from '@/components/feed/components/MainCard'

export default function Home() {
  return (
    <main className={styles.page}>
      <MainCard />
    </main>
  )
}
