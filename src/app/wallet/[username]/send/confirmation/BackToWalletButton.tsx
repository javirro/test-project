'use client'

import { setCookie } from 'cookies-next/client'
import Link from 'next/link'
import style from '../page.module.css'
import { revalidatePath } from 'next/cache'

const BackToWalletButton = ({ username }: { username: string }) => {
  const handleBackWallet = () => {
    revalidatePath(`/wallet/${username}`)
    setCookie('sendStep', '1')
  }
  return (
    <div className={style.nextButtonDiv}>
      <Link href={`/wallet/${username}`} className={style.nextButton} onClick={handleBackWallet}>
        Back to wallet
      </Link>
    </div>
  )
}

export default BackToWalletButton
