import { useRef, TouchEvent } from 'react'

import style from './collectionsModal.module.css'
import StarButtonIcon from '@/images/buttons/components/starButton'
import AddButtonIcon from '@/images/tapBar/components/addButton'

interface AnimatedSolanaBoxProps {
  setIsAnimating: (value: 'animateIn' | 'animateOut' | '') => void
  isAnimating: 'animateIn' | 'animateOut' | ''
  setShowDropdown: (showDropdown: boolean) => void
}

const CollectionsModal = ({ setShowDropdown, setIsAnimating, isAnimating }: AnimatedSolanaBoxProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const startY = useRef<number>(0)
  const currentY = useRef<number>(0)

  const handleTouchStart = (e: TouchEvent) => (startY.current = e.touches[0].clientY)

  const handleTouchMove = (e: TouchEvent) => (currentY.current = e.touches[0].clientY)

  const handleTouchEnd = () => {
    if (currentY.current - startY.current > 50) {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  return (
    <div
      ref={dropdownRef}
      className={`${style.setAmountModal} ${style[isAnimating]}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '16px 0', zIndex: '2000', width: '100%' }}
      >
        <div className={style.favoritesDiv}>
          <img className={style.favoritesDivImage} src="/project_image.png" alt="project image" />
          <div className={style.favoritesDivText}>
            <h4 className={style.favoritesDivTextH3}>Added to favorites</h4>
            <p className={style.favoritesDivTextP}>All coins</p>
          </div>
          <div className={style.favoritesDivStar}>
            <StarButtonIcon color="#F7C84F" width="24" height="24" />
          </div>
        </div>
        <div className={style.collectionsDiv}>
          <div className={style.collectionsDivBar}>
            <p>Colletions</p>
            <button>Add new collection</button>
          </div>
          <div className={style.collectionsDivProject}>
            <div>
              <img src="/project_image.png" alt="project image" />
              <div>
                <p>Top coins</p>
                <h5>Private</h5>
              </div>
              <button>
                <AddButtonIcon width="24" height="24" color="#707579" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsModal
