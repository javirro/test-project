'use client'

import { Asset } from '@/types/assetsList'
import style from './amountInformation.module.css'
import { useSendStore } from '@/app/store/sendStore'
import { useSellStore } from '@/app/store/sellStore'
import { usePathname } from 'next/navigation'

function AmountInformation({ balanceList }: { balanceList: Asset[] }) {
  const pathname = usePathname()
  const isSell = pathname.includes('sell')
  const { amount, tokenSymbol } = useSendStore()
  const { tokenSymbol: tokenSymbolSell, amount: amountSell } = useSellStore()
  const tokenSymbolToUse = isSell ? tokenSymbolSell : tokenSymbol
  const amountToUse = isSell ? amountSell : amount

  const asset = balanceList.find((token) => token.symbol.toLowerCase() === tokenSymbolToUse.toLowerCase())
  return (
    <section className={style.main}>
      <div className={style.amountContainer}>
        <p className={style.dollar}>$</p>
        <p className={style.amount}>{amountToUse}</p>
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
