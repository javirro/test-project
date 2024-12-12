'use client'

import style from './tapBarTokenActions.module.css'
import QrButtonIcon from '@/images/buttons/components/qrButton'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next/client'
import { useSendStore } from '@/app/store/sendStore'

function TapBarSendActions({ destination }: { destination: string }) {
  const router = useRouter()
  const { setDestination } = useSendStore()
  const handleNext = () => {
    setCookie('sendStep', '3')
    setDestination(destination)
    router.refresh()
  }
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>
          <QrButtonIcon width="24" height="24" color="#707579" />
        </button>
        <button onClick={handleNext} className={style.buyButton} disabled={!destination}>
          Next
        </button>
      </div>
    </div>
  )
}

export default TapBarSendActions
