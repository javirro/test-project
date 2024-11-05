import React from 'react'
import SaveButtonIcon from '@/images/buttons/components/saveButton'
import styles from './saveButton.module.css'
import { useState } from 'react'

interface SaveButtonProps {
  backgroundColor?: string
  activeBackgroundColor?: string
  onPress?: () => void
  heartColor?: string
  activeHeartColor?: string
  borderColor?: string
  activeBorderColor?: string
}

function SaveButton({
  backgroundColor = '#FDFBF2',
  activeBackgroundColor = '#F7C84F',
  onPress,
  heartColor = '#707579',
  activeHeartColor = '#000000',
  borderColor = '#00000026',
  activeBorderColor = '#000000',
}: SaveButtonProps) {
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
      style={{ backgroundColor: isActive ? activeBackgroundColor : backgroundColor, borderColor: isActive ? activeBorderColor : borderColor }}
    >
      <SaveButtonIcon width="28" height="28" color={isActive ? activeHeartColor : heartColor} />
    </button>
  )
}

export default SaveButton
