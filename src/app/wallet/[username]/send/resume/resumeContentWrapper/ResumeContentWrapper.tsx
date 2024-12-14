'use client'

import TransactionInformation from '../transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'
import style from './resumeContentWrapper.module.css'
import { useTransition } from 'react'
import Loading from '../loading/Loading'

interface ResumeContentWrapperProps {
  solPrice: number
}
function ResumeContentWrapper({ solPrice }: ResumeContentWrapperProps) {
  const [pending, startTransition] = useTransition()
  return (
    <>
      {pending ? (
        <Loading />
      ) : (
        <>
          <p className={style.text}>Send</p>
          <TransactionInformation solPrice={solPrice} />
          <SwipeBar startTransition={startTransition} />
        </>
      )}
    </>
  )
}

export default ResumeContentWrapper
