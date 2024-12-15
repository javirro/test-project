import WarningFileIcon from '@/images/status/components/warningFile'
import style from './toast.module.css'

interface ToastProps {
  text: string
  type?: "error" | "success"
}

function Toast({ text, type = "success" }: ToastProps) {
  return (
    <div className={style[`toast-container-${type}`]}>
      <WarningFileIcon className={style['toast-icon']} />
      <p className={style['toast-text']}>{text}</p>
    </div>
  )
}

export default Toast
