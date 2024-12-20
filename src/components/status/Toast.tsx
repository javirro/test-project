'use client'

import WarningFileIcon from '@/images/status/components/warningFile'
import CheckButtonIcon from '@/images/tapBar/components/checkButton'
import CloseButtonIcon from '@/images/tapBar/components/closeButton'
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
      {toastType === 'error' ? (
        <CloseButtonIcon className={style['toast-icon']} />
      ) : toastType === 'success' ? (
        <CheckButtonIcon className={style['toast-icon']} />
      ) : toastType === 'loading' ? (
        <img src="/loader_toast.gif" alt="loader" className={style['toast-icon']} />
      ) : (
        <WarningFileIcon className={style['toast-icon']} />
      )}
      <p className={style['toast-text']}>{toastMessage}</p>
    </div>
  )
}

export default Toast
