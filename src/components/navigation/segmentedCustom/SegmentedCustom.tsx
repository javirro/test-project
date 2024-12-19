import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import ArrowDownNormalButtonIcon from '@/images/buttons/components/arrowDownButton'
import style from './segmentedCustom.module.css'
import { useGetUserSolanaBuyAmount } from '@/hooks/useGetUserData'
import ForYouWatchListTabs from './ForYouWatchListTabs/ForYouWatchListTabs'
import AnimatedSolanaBox from './AnimatedSolanaAmountBox'
import { updateBuySolanaAmount } from '@/dataFetching/users/buySolanaAmount'
import useUser from '@/hooks/useUser'

interface SegmentedCustomProps {
  solanaAmount: number | undefined
  refetch: () => void
  setRefresher: Dispatch<SetStateAction<number>>
}

function SegmentedCustom({ solanaAmount, setRefresher }: SegmentedCustomProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(solanaAmount)
  const [inputType, setInputType] = useState<'custom' | 'default'>('default')
  const [isAnimating, setIsAnimating] = useState<'animateIn' | 'animateOut' | ''>('')
  const { user, token } = useUser()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    if (!showDropdown) {
      setShowDropdown(true)
      setIsAnimating('animateIn')
    } else {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  const handleUpdateSolanaAmount = async (amount: number) => {
    setSelectedAmount(amount)
    try {
      await updateBuySolanaAmount(user?.username as string, user?.telegramId as number, token, amount)
      setRefresher((prev) => prev + 1)
      setShowDropdown(false)
    } catch (err) {
      console.error('Error setting solana amount: ', err)
    }
  }

  const onBlurCustomInput = async () => {
    try {
      console.log('Token: ', token)
      await updateBuySolanaAmount(user?.username as string, user?.telegramId as number, token, selectedAmount as number)
      setRefresher((prev) => prev + 1)
    } catch (err) {
      console.error('Error setting solana amount: ', err)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDropdown])

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: 'var(--size27)', zIndex: '2000' }}>
      <ForYouWatchListTabs />
      <SolanaAmountBox key={selectedAmount} selectedAmount={selectedAmount as number} toggleDropdown={toggleDropdown} />
      {showDropdown && (
        <div ref={dropdownRef}>
          <AnimatedSolanaBox
            isAnimating={isAnimating}
            selectedAmount={selectedAmount}
            setIsAnimating={setIsAnimating}
            setSelectedAmount={setSelectedAmount}
            setShowDropdown={setShowDropdown}
            handleUpdateSolanaAmount={handleUpdateSolanaAmount}
            onBlurCustomInput={onBlurCustomInput}
            inputType={inputType}
            setInputType={setInputType}
          />
        </div>
      )}
    </section>
  )
}

const SegmentedCustomWrapper = () => {
  const [refresher, setRefresher] = useState<number>(0)
  const { solanaAmount, isLoading: loadingDefaultSolana, refetch } = useGetUserSolanaBuyAmount(refresher)
  return <>{!loadingDefaultSolana && solanaAmount && <SegmentedCustom solanaAmount={solanaAmount} refetch={refetch} setRefresher={setRefresher} />} </>
}
export default SegmentedCustomWrapper

const SolanaAmountBox = ({ selectedAmount, toggleDropdown }: { selectedAmount: number; toggleDropdown: () => void }) => {
  return (
    <div className={style.setAmountDiv} onClick={toggleDropdown}>
      <p key={selectedAmount}>Set amount: {selectedAmount} SOL</p>
      <ArrowDownNormalButtonIcon width="24" height="24" color="#fff" />
    </div>
  )
}
