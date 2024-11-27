import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import { useRef, ChangeEvent, TouchEvent } from 'react'
import style from './segmentedCustom.module.css'

interface AnimatedSolanaBoxProps {
  setIsAnimating: (value: 'animateIn' | 'animateOut' | '') => void
  isAnimating: 'animateIn' | 'animateOut' | ''
  setShowDropdown: (showDropdown: boolean) => void
  selectedAmount: number | 'custom' | undefined
  setSelectedAmount: (amount: number | 'custom') => void
  customAmount: string
  setCustomAmount: (customAmount: string) => void
  handleUpdateSolanaAmount: (amount: number | 'custom') => void
}

const SOLANA_AMOUNTS = [0.25, 0.5, 1, 3, 5]

const AnimatedSolanaBox = ({
  setCustomAmount,
  setShowDropdown,
  setSelectedAmount,
  setIsAnimating,
  selectedAmount,
  customAmount,
  isAnimating,
  handleUpdateSolanaAmount
}: AnimatedSolanaBoxProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const startY = useRef<number>(0)
  const currentY = useRef<number>(0)
  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomAmount(value)
  }

  const handleTouchStart = (e: TouchEvent) => (startY.current = e.touches[0].clientY)

  const handleTouchMove = (e: TouchEvent) => (currentY.current = e.touches[0].clientY)

  const handleTouchEnd = () => {
    if (currentY.current - startY.current > 50) {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  const handleAmountChange = (amount: number | 'custom') => {
    setSelectedAmount(amount)
    if (amount !== 'custom') setCustomAmount('')
  }
  return (
    <div
      ref={dropdownRef}
      className={`${style.setAmountModal} ${style[isAnimating]}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {selectedAmount === 'custom' ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', position: 'relative' }}>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '0',
              position: 'absolute',
              left: '0',
            }}
            onClick={() => setSelectedAmount(1)}
          >
            <ArrowLeftButtonIcon width="20" height="20" color="#000" />
          </button>
          <h3 style={{ margin: '0', textAlign: 'center', width: '100%' }}>Custom amount</h3>
        </div>
      ) : (
        <h3 style={{ padding: '16px 0' }}>Set amount</h3>
      )}

      {selectedAmount !== 'custom' ? (
        <>
          {SOLANA_AMOUNTS.map((amount) => (
            <label key={amount} className={selectedAmount === amount ? style.setAmountModalChecked : style.setAmountModalNormal}>
              <input type="radio" name="amount" value={amount} checked={selectedAmount === amount} onChange={() => handleUpdateSolanaAmount(amount)} />
              <span>{amount} SOL</span>
            </label>
          ))}
          <label className={style.setAmountModalNormal}>
            <input type="radio" name="amount" value="custom" onChange={() => handleAmountChange('custom')} />
            <span>Custom</span>
          </label>
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <p>This amount will be applied to all tokens you swipe right on.</p>
          <input type="number" value={customAmount} onChange={handleCustomAmountChange} placeholder="Enter custom amount" className={style.customInput} />
        </div>
      )}
    </div>
  )
}

export default AnimatedSolanaBox
