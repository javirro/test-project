'use client'

import React from 'react'
import style from './nextButton.module.css'
import { useSendStore } from '@/app/store/sendStore'
import { setCookie } from 'cookies-next/client'
import { usePathname, useRouter } from 'next/navigation'
import { useSellStore } from '@/app/store/sellStore'

function NextButton() {
  const pathname = usePathname()
  const isSell = pathname.includes('sell')
  const { amount } = useSendStore()
  const { amount: sellAmount } = useSellStore()
  const amountNumber = parseFloat(isSell ? sellAmount : amount)
  const router = useRouter()

  const handleNext = () => {
    if (pathname.includes('send')) setCookie('sendStep', '4')
    else if (pathname.includes('sell')) setCookie('sellStep', '3')
    router.refresh()
  }
  return (
    <button className={style.buttonNext} disabled={amountNumber <= 0} onClick={handleNext}>
      Next
    </button>
  )
}

export default NextButton
