'use client'

import Link from 'next/link'
import style from '../page.module.css'
import TransactionConfirmation from './TransactionConfirmation/transactionConfirmation/TransactionConfirmation'
import { setCookie } from 'cookies-next/client'
import { revalidatePath } from 'next/cache'

interface SellConfirmationProps {
  username: string
  solanaPrice: number
}

const SellConfirmation = ({ username, solanaPrice }: SellConfirmationProps) => {
  const handleBackToWallet = () => {
    revalidatePath(`/wallet/${username}`)
    setCookie('sellStep', '1')
  }
  return (
    <main className={style.confirmationMain}>
      <p className={style.confirmationText}>Just sold!</p>
      <TransactionConfirmation solPrice={solanaPrice} />
      <div className={style.confirmationNextButtonDiv}>
        <Link href={`/wallet/${username}`} className={style.confirmationNextButton} onClick={() =>handleBackToWallet()}>
          Back to wallet
        </Link>
      </div>
    </main>
  )
}

export default SellConfirmation
