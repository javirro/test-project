'use client'

import WarningFileIcon from '@/images/status/components/warningFile'
import style from './toast.module.css'
import { useToastStore } from '@/app/store/toastStore'
import { useEffect } from 'react'

function Toast() {
  const { toastMessage, toastType, setToastMessage } = useToastStore()

  useEffect(() => {
    if (toastMessage && toastType !== 'loading') {
      setTimeout(() => {
        setToastMessage(null)
      }, 4000)
    }
  }, [toastMessage, setToastMessage, toastType])

  if (!toastMessage) {
    return null
  }
  return (
    <div className={style[`toast-container-${toastType}`]}>
      <WarningFileIcon className={style['toast-icon']} />
      <p className={style['toast-text']}>{toastMessage}</p>
    </div>
  )
}

export default Toast
