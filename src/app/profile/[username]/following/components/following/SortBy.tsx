import { useRef, TouchEvent } from 'react'
import style from './following.module.css'

interface AnimatedSolanaBoxProps {
  setIsAnimating: (value: 'animateIn' | 'animateOut' | '') => void
  isAnimating: 'animateIn' | 'animateOut' | ''
  setShowDropdown: (showDropdown: boolean) => void
  mode: string
  setMode: (mode: string) => void
}

const MODES = ['Default', 'Date followed: Latest', 'Date followed: Earliest']

const SortBy = ({ setShowDropdown, setIsAnimating, setMode, mode, isAnimating }: AnimatedSolanaBoxProps) => {
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', zIndex: '2000' }}>
        <h3 style={{ margin: '0', textAlign: 'center', width: '100%' }}>Sort by</h3>
      </div>

      <>
        {MODES.map((modeMap) => (
          <label key={modeMap} className={mode === modeMap ? style.setAmountModalChecked : style.setAmountModalNormal}>
            <input type="radio" name="amount" value={modeMap} checked={mode === modeMap} onChange={() => setMode(modeMap)} />
            <span>{modeMap}</span>
          </label>
        ))}
      </>
    </div>
  )
}

export default SortBy
