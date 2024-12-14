'use client'

import TransactionInformation from '../transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'
import { useTransition } from 'react'
import Loading from '../loading/Loading'

function ResumeContentWrapper() {
  const [pending, startTransition] = useTransition()

  return (
    <>
      {pending ? (
        <Loading />
      ) : (
        <>
          <TransactionInformation />
          <SwipeBar startTransition={startTransition} />
        </>
      )}
    </>
  )
}

export default ResumeContentWrapper
