'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './swipeBar.module.css'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

interface swipeBarProps {
  setLoading: (loading: boolean) => void
}

const SwipeBar = ({ setLoading }: swipeBarProps) => {
  const [isSwiped, setIsSwiped] = useState(false)
  const router = useRouter()
  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 200) {
      setIsSwiped(true)
      try {
        setLoading(true)
        setTimeout(() => setLoading(false), 4000)
        //TODO: Set order to sell to backend and await for response
      } catch (error) {
        console.error('Error while trying to sell order', error)
      } finally {
        setLoading(false)
        setCookie('sellStep', '4')
        router.refresh()
      }
    } else {
      setIsSwiped(false)
    }
  }

  return (
    <div className={styles.swipeContainer}>
      <motion.div
        className={`${styles.swipeBar} ${isSwiped ? styles.swiped : ''}`}
        initial={{ x: 0 }}
        animate={{ backgroundColor: isSwiped ? '#f5c242' : 'transparent' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.circle}
          drag="x"
          dragConstraints={{ left: 0, right: 278 }}
          onDragEnd={handleDragEnd}
          animate={{ x: isSwiped ? 278 : 0 }}
          transition={{ type: 'spring', stiffness: 278, damping: 20 }}
        >
          <span>&gt;</span>
        </motion.div>
        <div className={styles.label}>{!isSwiped ? 'Swipe to confirm' : ''}</div>
      </motion.div>
    </div>
  )
}

export default SwipeBar
