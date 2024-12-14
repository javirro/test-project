'use client'

import React, { TransitionStartFunction, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './swipeBar.module.css'
import { setCookie } from 'cookies-next/client'
import { notFound, usePathname, useRouter } from 'next/navigation'
import { sendSolana, sendTokens } from '@/dataFetching/transactions/send'
import cookiesUserUtils from '@/utils/clientCookiesUtils'
import { useSendStore } from '@/app/store/sendStore'

interface swipeBarProps {
  startTransition: TransitionStartFunction
}

const SwipeBar = ({ startTransition }: swipeBarProps) => {
  const [isSwiped, setIsSwiped] = useState(false)
  const pathname = usePathname()
  const isSend = pathname.includes('send')
  const router = useRouter()
  const user = cookiesUserUtils.getUserDataFromCookie()
  const token = cookiesUserUtils.getTokenFromCookie()
  const { amount, destination, tokenAddress, tokenSymbol } = useSendStore()
  if (!user || !token) notFound()
  const handleDragEnd = async (_: any, info: any) => {
    startTransition(async () => {
      if (info.offset.x > 200) {
        setIsSwiped(true)
        try {
          //
          if (isSend) {
            const txData =
              tokenSymbol.toLowerCase() === 'sol'
                ? await sendSolana(user, token, amount, destination)
                : await sendTokens(user, token, tokenAddress, amount, destination)
            console.log('txData', txData)
            setCookie('sendStep', '5')
            router.refresh()
          } else {
            setCookie('sellStep', '4')
          }
          router.refresh()
        } catch (error) {
          console.error('Error while trying to sell order', error)
          return
        } finally {
        }
      } else {
        setIsSwiped(false)
      }
    })
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
