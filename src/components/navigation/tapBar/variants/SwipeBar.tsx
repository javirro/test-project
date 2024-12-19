'use client'

import React, { TransitionStartFunction, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styles from './swipeBar.module.css'
import { setCookie } from 'cookies-next/client'
import { notFound, usePathname, useRouter } from 'next/navigation'
import { sendSolana, sendTokens } from '@/dataFetching/transactions/send'
import cookiesUserUtils from '@/utils/clientCookiesUtils'
import { useSendStore } from '@/app/store/sendStore'
import { revalidateActivity } from '@/dataFetching/revalidatePath/revaliteCreateUser'

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

  const motionValue = useMotionValue(0)
  const background = useTransform(
    motionValue,
    [0, 200],
    ['linear-gradient(90deg, #F7C84F 0%, #F7C84F 0%, #fff 0%, #fff 100%)', 'linear-gradient(90deg, #F7C84F 0%, #F7C84F 100%, #fff 100%, #fff 100%)']
  )

  const handleDragEnd = async (_: any, info: any) => {
    startTransition(async () => {
      if (info.offset.x > 150) {
        setIsSwiped(true)
        try {
          if (isSend) {
            const txData =
              tokenSymbol.toLowerCase() === 'sol'
                ? await sendSolana(user, token, amount, destination)
                : await sendTokens(user, token, tokenAddress, amount, destination)
            console.log('txData', txData)
            setCookie('sendStep', '5')
            revalidateActivity(user.username)
            router.refresh()
          } else {
            setCookie('sellStep', '4')
          }
          router.refresh()
        } catch (error) {
          console.error('Error while trying to process order', error)
          return
        }
      } else {
        setIsSwiped(false)
      }
    })
  }

  return (
    <motion.div className={styles.swipeContainer} style={{ background }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x: motionValue }}
        className={`${styles.circle} ${isSwiped ? styles.completed : ''}`}
      >
        <span>&gt;</span>
      </motion.div>
      <div className={styles.label}>{!isSwiped ? 'Swipe to confirm' : ''}</div>
    </motion.div>
  )
}

export default SwipeBar
