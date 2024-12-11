'use client'

import { Asset } from '@/types/assetsList'
import style from './amountInformation.module.css'
import { useSendStore } from '@/app/store/sendStore'

function AmountInformation({ balanceList }: { balanceList: Asset[] }) {
  const { amount, tokenSymbol } = useSendStore()
  const asset = balanceList.find((token) => token.symbol.toLowerCase() === tokenSymbol.toLowerCase())
  return (
    <section className={style.main}>
      <div className={style.amountContainer}>
        <p className={style.dollar}>$</p>
        <p className={style.amount}>{amount}</p>
      </div>
      <p className={style.balance}>
        Balance: <span className={style.balanceSpan}>$45,00000</span>
      </p>
      <div className={style.priceContainer}>
        <p>{asset?.amount}</p>
        <p>{asset?.symbol}</p>
      </div>
    </section>
  )
}

export default AmountInformation
