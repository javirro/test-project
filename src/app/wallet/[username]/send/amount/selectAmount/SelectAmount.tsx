'use client'

import { useSendStore } from '@/app/store/sendStore'
import style from './selectAmount.module.css'
import { Asset } from '@/types/assetsList'

function SelectAmount({ balanceList }: { balanceList: Asset[] }) {
  const { setAmount, tokenSymbol } = useSendStore()

  const handleAmount = (percentage: number) => {
    const selectedToken = balanceList.find((token) => token.symbol.toLowerCase() === tokenSymbol.toLowerCase())
    if (!selectedToken) return
    const amount = (selectedToken.amount * percentage) / 100
    setAmount(amount.toString())
  }

  return (
    <section className={style.main}>
      <div className={style.sectionButtons}>
        <button className={style.button} onClick={() => handleAmount(25)}>
          {'25%'}
        </button>
        <button className={style.button} onClick={() => handleAmount(50)}>
          {'50%'}
        </button>
        <button className={style.button} onClick={() => handleAmount(100)}>
          {'Max'}
        </button>
      </div>
    </section>
  )
}

export default SelectAmount
