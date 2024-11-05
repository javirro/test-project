import React from 'react'
import CheckButtonIcon from '@/images/tapBar/components/checkButton'
import styles from './likeButton.module.css'
import { useState } from 'react'

interface LikeButtonProps {
  backgroundColor?: string
  activeBackgroundColor?: string
  onPress?: () => void
  heartColor?: string
  activeHeartColor?: string
  borderColor?: string
  activeBorderColor?: string
  activeIconColor?: string
}

function LikeButton({
  backgroundColor = '#FDFBF2',
  activeBackgroundColor = '#007AFF',
  activeIconColor = '#FFFFFF',
  onPress,
  borderColor = '#00000026',
  activeBorderColor = '#004AFF',
}: LikeButtonProps) {
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
      <CheckButtonIcon width="24" height="24" color={isActive ? activeIconColor : '#007AFF'} />
    </button>
  )
}

export default LikeButton
