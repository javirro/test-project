'use client'

import style from './amountInformation.module.css'
import { useSendStore } from '@/app/store/sendStore'

function AmountInformation() {
  const { amount } = useSendStore()

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
        <p>5,786.00</p>
        <p>SOL</p>
      </div>
    </section>
  )
}

export default AmountInformation
