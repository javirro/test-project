'use client'

import style from './keyboard.module.css'
import BackSpaceButtonIcon from '@/images/buttons/components/backspaceButton'
import { useSendStore } from '@/app/store/sendStore'
import { useSellStore } from '@/app/store/sellStore'
import { usePathname } from 'next/navigation'

function Keyboard() {
  const { amount, setAmount } = useSendStore()
  const { amount: amountSell, setAmount: setAmountSell } = useSellStore()
  const pathname = usePathname()
  const isSell = pathname.includes('sell')

  const amountToUse = isSell ? amountSell : amount
  const setAmountToUse = isSell ? setAmountSell : setAmount

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const handleNumberClick = (number: string) => {
    if (amountToUse === '0') {
      setAmountToUse(number === "." ? '0.' : number)
    } else {
      setAmountToUse(amountToUse + number)
    }
  }

  const handleBackspace = () => {
    if (amountToUse.length > 1) {
      setAmountToUse(amountToUse.slice(0, -1))
    } else {
      setAmountToUse('0')
    }
  }

  return (
    <section className={style.main}>
      {numbers.map((number) => (
        <button key={number} className={style.button} onClick={() => handleNumberClick(number)}>
          {number}
        </button>
      ))}
      <div style={{ width: '100%', display: 'flex', gap: '12px', justifyContent: 'end' }}>
      <button className={style.button} onClick={() => handleNumberClick('.')}>
          .
        </button>
        <button className={style.button} onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button className={style.button} onClick={handleBackspace}>
          <BackSpaceButtonIcon width="36" height="36" color="#997312" />
        </button>
      </div>
    </section>
  )
}

export default Keyboard
