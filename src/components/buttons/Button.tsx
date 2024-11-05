'use client'

import styles from './button.module.css'
import AddButtonIcon from '@/images/tapBar/components/addButton'
import { useState } from 'react'

interface ButtonProps {
  paddingX?: string
  paddingY?: string
  fontSize?: string
  backgroundColor?: string
  textColor?: string
  onPress?: () => void
  addButtonColor?: string
  addButtonWidth?: string
  addButtonHeight?: string
  activeBackgroundColor?: string
}

function Button({
  paddingX = '24px',
  paddingY = '14px',
  fontSize = '16px',
  backgroundColor = '#477ECD',
  textColor = '#FCFCFC',
  onPress,
  addButtonColor = '#FFF',
  addButtonWidth = '18',
  addButtonHeight = '18',
  activeBackgroundColor = '#365A8C',
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false)

  const handleMouseDown = () => {
    setIsActive(true)
  }

  const handleMouseUp = () => {
    setTimeout(() => setIsActive(false), 100)
    if (onPress) onPress()
  }

  return (
    <button
      className={styles.button}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsActive(false)}
      style={{
        padding: `${paddingY} ${paddingX}`,
        fontSize: fontSize,
        backgroundColor: isActive ? activeBackgroundColor : backgroundColor,
        color: textColor,
      }}
    >
      <AddButtonIcon width={addButtonWidth} height={addButtonHeight} color={addButtonColor} />
      Compartir perfil de PEPE
    </button>
  )
}

export default Button
