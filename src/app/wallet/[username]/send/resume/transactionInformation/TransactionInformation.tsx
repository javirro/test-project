'use client'

import { useSendStore } from '@/app/store/sendStore'
import style from './transactionInformation.module.css'
import { getTokenImg } from '@/images/tokens'

interface TransactionInformationProps {
  solPrice: number
}

function TransactionInformation({ solPrice }: TransactionInformationProps) {
  const { amount, destination, tokenSymbol } = useSendStore()
  const solAmount = 1.21
  const total = solAmount * solPrice
  return (
    <section className={style.main}>
      <div className={style.mainInfo}>
        <img className={style.mainImage} src="/Avatar.svg" alt="" />
        <div>
          <p className={style.mainText}>
            {' '}
            {amount} {tokenSymbol}
          </p>
          <div className={style.mainCurrency}>
            <img src={getTokenImg('sol')} alt="" />
            <p className={style.mainCurrencyText}>{solAmount} SOL</p>
          </div>
        </div>
      </div>
      <div className={style.mainDiv}>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>To:</p>
          <div>
            <p className={style.addressText}>Address 1</p>
            <p className={style.addressDirection}>{destination}</p>
          </div>
        </div>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Network:</p>
          <p className={style.addressText}>Solana</p>
        </div>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Network Fee:</p>
          <div>
            <p className={style.addressText}>1.55 PEP</p>
            <p className={style.addressDirection}>0.03 SOL</p>
          </div>
        </div>
        <hr style={{ width: '100%' }} />
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Total:</p>
          <p className={style.addressText}>$ {total?.toFixed(2)}</p>
        </div>
      </div>
      <div className={style.mainDiv}>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Send time:</p>
          <p className={style.addressText}>30 min</p>
        </div>
      </div>
    </section>
  )
}

export default TransactionInformation
