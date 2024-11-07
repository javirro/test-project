import WarningFileIcon from '@/images/status/components/warningFile'

interface ToastProps {
  text: string
}

function Toast({ text }: ToastProps) {
  return (
    <div style={{ display: 'flex', gap: '12px', backgroundColor: '#F7C84F', padding: '16px', borderRadius: '12px', alignItems: 'flex-start' }}>
      <WarningFileIcon width="30" height="30" color="#000" />
      <p style={{ color: '#000' }}>{text}</p>
    </div>
  )
}

export default Toast
