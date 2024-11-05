import React, { useState } from 'react'
import styles from './TapBarButton.module.css'
import { IconProps } from '@/types'

interface TapBarButtonProps {
  backgroundColor?: string
  activeBackgroundColor?: string
  onPress?: () => void
  heartColor?: string
  activeHeartColor?: string
  Icon: React.FC<IconProps>
}

function TapBarButton({
  backgroundColor = '#FDFBF2',
  activeBackgroundColor = '#EFEFF4 ',
  onPress,
  heartColor = '#707579',
  Icon, // Recibe el componente Icon como prop
}: TapBarButtonProps) {
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
      style={{ backgroundColor: isActive ? activeBackgroundColor : backgroundColor }}
    >
      {/* Renderiza el componente Icon, pasando las props necesarias */}
      <Icon width="28" height="28" />
    </button>
  )
}

export default TapBarButton
