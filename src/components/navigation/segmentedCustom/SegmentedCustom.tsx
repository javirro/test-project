import { useState } from 'react'
import ArrowDownNormalButtonIcon from '@/images/buttons/components/arrowDownButton'
import style from './segmentedCustom.module.css'
import { useGetUserSolanaBuyAmount } from '@/hooks/useGetUserData'
import ForYouWatchListTabs from './ForYouWatchListTabs/ForYouWatchListTabs'
import AnimatedSolanaBox from './AnimatedSolanaAmountBox'
import { useUserStore } from '@/app/store/userStore'
import { updateBuySolanaAmount } from '@/dataFetching/users/buySolanaAmount'

interface SegmentedCustomProps {
  solanaAmount: number | undefined
  refetch: () => void
}

function SegmentedCustom({ solanaAmount, refetch }: SegmentedCustomProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom' | undefined>(solanaAmount)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isAnimating, setIsAnimating] = useState<'animateIn' | 'animateOut' | ''>('')
  const { user, token } = useUserStore()

  const toggleDropdown = () => {
    if (!showDropdown) {
      setShowDropdown(true)
      setIsAnimating('animateIn')
    } else {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  const handleUpdateSolanaAmount = async (amount: number | 'custom') => {
    if (amount === 'custom') {
      setSelectedAmount(amount)
      setCustomAmount('')
    } else {
      setSelectedAmount(amount)
      try {
        await updateBuySolanaAmount(user?.username as string, user?.telegramId as number, token, amount)
        refetch()
      } catch (err) {
        console.error('Error setting solana amount: ', err)
      }
    }
  }

  // const displayAmount = selectedAmount === 'custom' ? customAmount || '0' : selectedAmount

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: 'var(--size27)' }}>
      <ForYouWatchListTabs />
      {
        <div className={style.setAmountDiv} onClick={toggleDropdown} key={solanaAmount}>
          <p>Set amount: {selectedAmount} SOL</p>
          <ArrowDownNormalButtonIcon width="24" height="24" color="#fff" />
        </div>
      }
      {showDropdown && (
        <AnimatedSolanaBox
          isAnimating={isAnimating}
          selectedAmount={selectedAmount}
          customAmount={customAmount}
          setIsAnimating={setIsAnimating}
          setSelectedAmount={setSelectedAmount}
          setCustomAmount={setCustomAmount}
          setShowDropdown={setShowDropdown}
          handleUpdateSolanaAmount={handleUpdateSolanaAmount}
        />
      )}
    </section>
  )
}

const SegmentedCustomWrapper = () => {
  const { solanaAmount, isLoading: loadingDefaultSolana, refetch } = useGetUserSolanaBuyAmount()
  return <>{!loadingDefaultSolana && solanaAmount && <SegmentedCustom solanaAmount={solanaAmount} refetch={refetch} />} </>
}
export default SegmentedCustomWrapper
