import { ReactNode } from 'react'
import style from './badget.module.css'

interface BadgetProps {
  backgroundColor?: string
  children?: ReactNode
  width?: string
  height?: string
}

function Badget({ backgroundColor = 'transparent', children, width = '40px', height = '40px' }: BadgetProps) {
  return (
    <button
      className={style.badget}
      style={{
        backgroundColor,
        border: '1px solid #FCFCFC',
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        width: width,
        height: height,
      }}
    >
      {children}
    </button>
  )
}

export default Badget
