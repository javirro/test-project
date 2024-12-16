'use client'

import style from './selectAmount.module.css'
import { getTokenImg } from '@/images/tokens'
import SwapButtonIcon from '@/images/buttons/components/swapButton'
import { Asset } from '@/types/assetsList'
import Image from 'next/image'
import { useSellStore } from '@/app/store/sellStore'

function SelectAmount({ balanceList }: { balanceList: Asset[] }) {
  const {  tokenSymbol, setAmount, tokenImg } = useSellStore()

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
      <div className={style.swapSection}>
        <div className={style.firstSection}>
          <img className={style.image} src={tokenImg} alt="Token symbol" />
          <div>
            <p className={style.textLeft}>Pay</p>
            <p className={style.secondText}>{tokenSymbol}</p>
          </div>
        </div>

        <button className={style.swapButton}>
          <SwapButtonIcon width="24" height="24" color="#707579" />
        </button>
        <div className={style.secondSection}>
          <div>
            <p className={style.firstText}>Receive</p>
            <p className={style.secondText}>{"SOL"}</p>
          </div>
          <Image width="36" height="36" src={getTokenImg('sol')} alt="Solana symbol" />
        </div>
      </div>
    </section>
  )
}

export default SelectAmount
