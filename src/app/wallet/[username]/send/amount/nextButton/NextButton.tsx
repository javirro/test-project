'use client'

import React from 'react'
import style from './nextButton.module.css'
import { useSendStore } from '@/app/store/sendStore'
import { setCookie } from 'cookies-next/client'
import { usePathname, useRouter } from 'next/navigation'
import { useSellStore } from '@/app/store/sellStore'
import { Asset } from '@/types/assetsList'

function NextButton({ balanceList, solBalance }: { balanceList: Asset[]; solBalance: string }) {
  const pathname = usePathname()
  const isSell = pathname.includes('sell')
  const { amount, tokenSymbol } = useSendStore()
  const { amount: sellAmount, tokenSymbol: tokenSymbolSell } = useSellStore()
  const tokenSymbolToUse = isSell ? tokenSymbolSell : tokenSymbol
  const amountNumber = parseFloat(isSell ? sellAmount : amount)
  let tokenBalance = 0
  if (tokenSymbolToUse.toUpperCase() === 'SOL') {
    tokenBalance = parseFloat(solBalance)
  } else {
    const balanceForToken = balanceList.find((b) => b.symbol === tokenSymbolToUse)?.amount ?? 0
    tokenBalance = balanceForToken
  }

  const isAmountValid = amountNumber <= tokenBalance
  const router = useRouter()

  const handleNext = () => {
    if (pathname.includes('send')) setCookie('sendStep', '4')
    else if (pathname.includes('sell')) setCookie('sellStep', '3')
    router.refresh()
  }
  return (
    <button className={style.buttonNext} disabled={amountNumber <= 0 || !isAmountValid} onClick={handleNext}>
      Next
    </button>
  )
}

export default NextButton
