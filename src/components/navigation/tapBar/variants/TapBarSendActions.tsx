'use client'

import style from './tapBarTokenActions.module.css'
import QrButtonIcon from '@/images/buttons/components/qrButton'
import { useUserStore } from '@/app/store/userStore'
import Link from 'next/link'

function TapBarSendActions() {
  const { user } = useUserStore()

  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>
          <QrButtonIcon width="24" height="24" color="#707579" />
        </button>
        <Link href={`/wallet/${user?.username}/send/amount`} className={style.buyButton}>
          Next
        </Link>
      </div>
    </div>
  )
}

export default TapBarSendActions
