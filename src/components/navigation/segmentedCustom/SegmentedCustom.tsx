import { useState, useRef, ChangeEvent, TouchEvent } from 'react'
import ArrowDownNormalButtonIcon from '@/images/buttons/components/arrowDownButton'
import style from './segmentedCustom.module.css'
import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import { useGetUserSolanaBuyAmount } from '@/hooks/useGetUserData'

function SegmentedCustom() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isAnimating, setIsAnimating] = useState<'animateIn' | 'animateOut' | ''>('')
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const startY = useRef<number>(0)
  const currentY = useRef<number>(0)
  const { solanaAmount } = useGetUserSolanaBuyAmount()
  console.log(solanaAmount)
  const handleButtonClick = (index: number) => setActiveIndex(index)

  const toggleDropdown = () => {
    if (!showDropdown) {
      setShowDropdown(true)
      setIsAnimating('animateIn')
    } else {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  const handleAmountChange = (amount: number | 'custom') => {
    setSelectedAmount(amount)
    if (amount !== 'custom') setCustomAmount('')
  }

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

  const displayAmount = selectedAmount === 'custom' ? customAmount || '0' : selectedAmount

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: 'var(--size27)' }}>
      <div className={style.segmentedCustom}>
        <button onClick={() => handleButtonClick(0)} className={`${activeIndex === 0 ? style.buttonActive : style.buttonInactive} ${style.buttonLeft}`}>
          For you
        </button>
        <button onClick={() => handleButtonClick(1)} className={`${activeIndex === 1 ? style.buttonActive : style.buttonInactive} ${style.buttonRight}`}>
          Watchlist
        </button>
      </div>
      <div className={style.setAmountDiv} onClick={toggleDropdown}>
        <p>Set amount: {displayAmount} SOL</p>
        <ArrowDownNormalButtonIcon width="24" height="24" color="#fff" />
      </div>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className={`${style.setAmountModal} ${style[isAnimating]}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {selectedAmount === 'custom' ? null : <h3 style={{ padding: '16px 0' }}>Set amount</h3>}
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
          ) : null}

          {selectedAmount === 'custom' ? null : (
            <>
              {[0.25, 0.5, 1, 3, 5].map((amount) => (
                <label key={amount} className={selectedAmount === amount ? style.setAmountModalChecked : style.setAmountModalNormal}>
                  <input type="radio" name="amount" value={amount} checked={selectedAmount === amount} onChange={() => handleAmountChange(amount)} />
                  <span>{amount} SOL</span>
                </label>
              ))}
              <label className={style.setAmountModalNormal}>
                <input type="radio" name="amount" value="custom" onChange={() => handleAmountChange('custom')} />
                <span>Custom</span>
              </label>
            </>
          )}

          {selectedAmount === 'custom' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <p>This amount will be applied to all tokens you swipe right on.</p>
              <input type="number" value={customAmount} onChange={handleCustomAmountChange} placeholder="Enter custom amount" className={style.customInput} />
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default SegmentedCustom
