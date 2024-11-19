'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={styles.errorpage}>
      <h2 className={styles.title}>Something went wrong!</h2>
      <Link href="/" className={styles.goBack}>Go back home</Link>
    </div>
  )
}
