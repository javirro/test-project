'use client'

import React from 'react'
import Link from 'next/link'
import { useUserStore } from '@/app/store/userStore'
import style from './nextButton.module.css'

function NextButton() {
  const { user } = useUserStore()

  return (
    <Link href={`/wallet/${user?.username}/send/resume`} className={style.buttonNext}>
      Next
    </Link>
  )
}

export default NextButton
