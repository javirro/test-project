import React from 'react'
import HeartButtonIcon from '@/images/buttons/components/heartButton'
import styles from './likeToggleButton.module.css'
import { useState } from 'react'

interface LikeToggleButtonProps {
  backgroundColor?: string
  activeBackgroundColor?: string
  onPress?: () => void
  heartColor?: string
  activeHeartColor?: string
}

function LikeToggleButton({
  backgroundColor = '#FDFBF2',
  activeBackgroundColor = '#FFF5F7',
  onPress,
  heartColor = '#707579',
  activeHeartColor = '#E53935',
}: LikeToggleButtonProps) {
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
      <HeartButtonIcon width="28" height="28" color={isActive ? activeHeartColor : heartColor} />
    </button>
  )
}

export default LikeToggleButton
