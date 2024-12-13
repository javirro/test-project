import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import { useRef, ChangeEvent, TouchEvent } from 'react'
import style from './segmentedCustom.module.css'

interface AnimatedSolanaBoxProps {
  setIsAnimating: (value: 'animateIn' | 'animateOut' | '') => void
  isAnimating: 'animateIn' | 'animateOut' | ''
  setShowDropdown: (showDropdown: boolean) => void
  selectedAmount: number | 'custom' | undefined
  setSelectedAmount: (amount: number | undefined) => void
  handleUpdateSolanaAmount: (amount: number) => void
  onBlurCustomInput: () => void
  inputType: 'custom' | 'default'
  setInputType: (inputType: 'custom' | 'default') => void
}

const SOLANA_AMOUNTS = [0.25, 0.5, 1, 3, 5]

const AnimatedSolanaBox = ({
  setShowDropdown,
  setSelectedAmount,
  setIsAnimating,
  selectedAmount,
  isAnimating,
  handleUpdateSolanaAmount,
  onBlurCustomInput,
  inputType,
  setInputType,
}: AnimatedSolanaBoxProps) => {
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

  const handleCustomInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '') return
    const amount = parseFloat(value)
    setSelectedAmount(amount)
  }
  return (
    <div
      ref={dropdownRef}
      className={`${style.setAmountModal} ${style[isAnimating]}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {inputType === 'custom' ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', position: 'absolute', zIndex: '2000' }}>
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
            onClick={() => setInputType('default')}
          >
            <ArrowLeftButtonIcon width="20" height="20" color="#000" />
          </button>
          <h3 style={{ margin: '0', textAlign: 'center', width: '100%' }}>Custom amount</h3>
        </div>
      ) : (
        <h3 style={{ padding: '16px 0' }}>Set amount</h3>
      )}

      {inputType !== 'custom' ? (
        <>
          {SOLANA_AMOUNTS.map((amount) => (
            <label key={amount} className={selectedAmount === amount ? style.setAmountModalChecked : style.setAmountModalNormal}>
              <input type="radio" name="amount" value={amount} checked={selectedAmount === amount} onChange={() => handleUpdateSolanaAmount(amount)} />
              <span>{amount} SOL</span>
            </label>
          ))}
          <label className={style.setAmountModalNormal}>
            <input type="radio" name="amount" value="custom" onChange={() => setInputType('custom')} />
            <span>Custom</span>
          </label>
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <p>This amount will be applied to all tokens you swipe right on.</p>
          <input
            type="number"
            value={selectedAmount}
            onChange={handleCustomInput}
            onBlur={() => onBlurCustomInput()}
            placeholder="Enter custom amount"
            className={style.customInput}
          />
        </div>
      )}
    </div>
  )
}

export default AnimatedSolanaBox
