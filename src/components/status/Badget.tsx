import { ReactNode } from 'react'

interface BadgetProps {
  backgroundColor?: string
  children?: ReactNode
}

function Badget({ backgroundColor = 'transparent', children }: BadgetProps) {
  return (
    <button
      style={{
        backgroundColor,
        border: '1px solid #FCFCFC',
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
      }}
    >
      {children}
    </button>
  )
}

export default Badget
