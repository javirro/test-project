'use client'

import TransactionInformation from '../transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'
import style from './resumeContentWrapper.module.css'
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
          <p className={style.text}>Send</p>
          <TransactionInformation />
          <SwipeBar setLoading={setLoading} />
        </>
      )}
    </>
  )
}

export default ResumeContentWrapper
