'use client'

import TransactionInformation from '../transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'
import { useTransition } from 'react'
import Loading from '../loading/Loading'
import style from './resumeContentWrapper.module.css'

function ResumeContentWrapper({ solPrice }: { solPrice: number }) {
  const [pending, startTransition] = useTransition()

  return (
    <main className={style.mainResume}>
      {pending ? (
        <Loading />
      ) : (
        <>
          <TransactionInformation solPrice={solPrice} />
          <SwipeBar startTransition={startTransition} />
        </>
      )}
    </main>
  )
}

export default ResumeContentWrapper
