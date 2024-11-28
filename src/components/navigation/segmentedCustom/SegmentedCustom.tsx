import {  useState } from 'react'
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

function SegmentedCustom({ solanaAmount }: SegmentedCustomProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(solanaAmount)
  const [inputType, setInputType] = useState<'custom' | 'default'>('default')
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

  const handleUpdateSolanaAmount = async (amount: number) => {
    setSelectedAmount(amount)
    try {
      await updateBuySolanaAmount(user?.username as string, user?.telegramId as number, token, amount)
    } catch (err) {
      console.error('Error setting solana amount: ', err)
    }
  }

  const onBlurCustomInput = async () => {
    try {
      await updateBuySolanaAmount(user?.username as string, user?.telegramId as number, token, selectedAmount as number)
    } catch (err) {
      console.error('Error setting solana amount: ', err)
    }
  }


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
          setIsAnimating={setIsAnimating}
          setSelectedAmount={setSelectedAmount}
          setShowDropdown={setShowDropdown}
          handleUpdateSolanaAmount={handleUpdateSolanaAmount}
          onBlurCustomInput={onBlurCustomInput}
          inputType={inputType}
          setInputType={setInputType}
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
