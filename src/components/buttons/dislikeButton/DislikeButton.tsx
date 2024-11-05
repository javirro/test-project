import React from 'react'
import CloseButtonIcon from '@/images/tapBar/components/closeButton'
import styles from './dislikeButton.module.css'
import { useState } from 'react'

interface DislikeButtonProps {
  backgroundColor?: string
  activeBackgroundColor?: string
  onPress?: () => void
  heartColor?: string
  activeHeartColor?: string
  borderColor?: string
  activeBorderColor?: string
  activeIconColor?: string
}

function DislikeButton({
  backgroundColor = '#FDFBF2',
  activeBackgroundColor = '#E53935',
  activeIconColor = '#FFFFFF',
  onPress,
  borderColor = '#00000026',
  activeBorderColor = '#E55000',
}: DislikeButtonProps) {
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
      <CloseButtonIcon width="20" height="20" color={isActive ? activeIconColor : '#E53935'} />
    </button>
  )
}

export default DislikeButton
