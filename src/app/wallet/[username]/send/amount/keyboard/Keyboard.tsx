'use client'

import style from './keyboard.module.css'
import BackSpaceButtonIcon from '@/images/buttons/components/backspaceButton'
import { useSendStore } from '@/app/store/sendStore'

function Keyboard() {
  const { amount, setAmount } = useSendStore()

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const handleNumberClick = (number: string) => {
    if (amount === '0') {
      setAmount(number)
    } else {
      setAmount(amount + number)
    }
  }

  const handleBackspace = () => {
    if (amount.length > 1) {
      setAmount(amount.slice(0, -1))
    } else {
      setAmount('0')
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
