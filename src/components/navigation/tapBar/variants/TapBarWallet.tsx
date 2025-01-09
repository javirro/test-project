'use client'
import CopyButtonIcon from '@/images/buttons/components/copyButton'
import style from './tapBarWallet.module.css'
import useUser from '@/hooks/useUser'
import { useEffect, useState } from 'react'

function TapBarWallet() {
  const [copied, setCopied] = useState(false)
  const { user } = useUser()
  const shortAddress = user?.address.slice(0, 10) + '...' + user?.address?.slice(-10)

  const copyToClipboard = () => {
    if (user?.address) {
      setCopied(true)
      navigator.clipboard.writeText(user?.address as string)
    }
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    }
  }, [copied])

  return (
    <div className={style.main}>
      <div className={style.buttonsDiv} onClick={copyToClipboard}>
        <button className={style.sellButton}>
          <CopyButtonIcon width="24" height="24" color="#707579" />
          {!copied ? shortAddress : 'Copied!'}
        </button>
        <button className={style.buyButton}>Share</button>
      </div>
    </div>
  )
}

export default TapBarWallet
