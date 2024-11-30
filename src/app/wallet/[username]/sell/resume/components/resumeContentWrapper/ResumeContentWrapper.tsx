'use client'

import TransactionInformation from '../transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'
import { useState } from 'react'
import Loading from '../loading/Loading'

function ResumeContentWrapper() {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TransactionInformation />
          <SwipeBar setLoading={setLoading} />
        </>
      )}
    </>
  )
}

export default ResumeContentWrapper
