'use client'

import TransactionInformation from '../transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'
import style from './resumeContentWrapper.module.css'
import { useState } from 'react'
import Loading from '../loading/Loading'

interface ResumeContentWrapperProps {
  solPrice: number
}
function ResumeContentWrapper( { solPrice }: ResumeContentWrapperProps) {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className={style.text}>Send</p>
          <TransactionInformation solPrice={solPrice}/>
          <SwipeBar setLoading={setLoading} />
        </>
      )}
    </>
  )
}

export default ResumeContentWrapper
