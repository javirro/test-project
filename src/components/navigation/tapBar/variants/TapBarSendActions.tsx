'use client'

import style from './tapBarTokenActions.module.css'
import QrButtonIcon from '@/images/buttons/components/qrButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function TapBarSendActions() {
  const router = useRouter()

  const handleClick = () => {}

  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>
          <QrButtonIcon width="24" height="24" color="#707579" />
        </button>
        <button className={style.buyButton}>Next</button>
      </div>
    </div>
  )
}

export default TapBarSendActions
