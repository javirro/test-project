'use client'

import React from 'react'
import style from './nextButton.module.css'
import { useSendStore } from '@/app/store/sendStore'
import { setCookie } from 'cookies-next/client'
import { useRouter } from 'next/navigation'

function NextButton() {
  const { amount } = useSendStore()
  const amountNumber = parseFloat(amount)
  const router = useRouter()
  const handleNext = () => {
    setCookie('sendStep', '4')
    router.refresh()
  }
  return (
    <button className={style.buttonNext} disabled={amountNumber <= 0} onClick={handleNext}>
      Next
    </button>
  )
}

export default NextButton
