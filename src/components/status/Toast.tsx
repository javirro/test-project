import WarningFileIcon from '@/images/status/components/warningFile'
import style from './toast.module.css'

interface ToastProps {
  text: string
}

function Toast({ text }: ToastProps) {
  return (
    <div className={style['toast-container']}>
      <WarningFileIcon className={style['toast-icon']} />
      <p className={style['toast-text']}>{text}</p>
    </div>
  )
}

export default Toast
