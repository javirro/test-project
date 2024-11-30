'use client'

import { useState } from 'react'
import SelectPercentageButton from '../selectPercentage/SelectPercentageButton'
import style from './selectAmount.module.css'
import { getTokenImg } from '@/images/tokens'
import SwapButtonIcon from '@/images/buttons/components/swapButton'

function SelectAmount() {
  const [tokens, setTokens] = useState({
    pay: { symbol: 'PEPE', img: 'sol' },
    receive: { symbol: 'USDT', img: 'usdt' },
  })

  const handleSwap = () => {
    setTokens((prevTokens) => ({
      pay: prevTokens.receive,
      receive: prevTokens.pay,
    }))
  }

  return (
    <section className={style.main}>
      <div className={style.sectionButtons}>
        <SelectPercentageButton percentage="25%" />
        <SelectPercentageButton percentage="50%" />
        <SelectPercentageButton percentage="Max." />
      </div>
      <div className={style.swapSection}>
        <div className={style.firstSection}>
          <img src={getTokenImg(tokens.pay.img)} alt={tokens.pay.symbol} />
          <div>
            <p className={style.textLeft}>Pay</p>
            <p className={style.secondText}>{tokens.pay.symbol}</p>
          </div>
        </div>
        <button className={style.swapButton} onClick={handleSwap}>
          <SwapButtonIcon width="24" height="24" color="#707579" />
        </button>
        <div className={style.secondSection}>
          <div>
            <p className={style.firstText}>Receive</p>
            <p className={style.secondText}>{tokens.receive.symbol}</p>
          </div>
          <img src={getTokenImg(tokens.receive.img)} alt={tokens.receive.symbol} />
        </div>
      </div>
    </section>
  )
}

export default SelectAmount
