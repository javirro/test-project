import styles from './page.module.css'
import TapBar from '@/components/tapBar/tapBar'

export default function Home() {
  return (
    <div className={styles.page}>
      <TapBar />
    </div>
  )
}
