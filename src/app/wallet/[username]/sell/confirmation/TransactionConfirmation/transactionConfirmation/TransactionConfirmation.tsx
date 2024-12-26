'use client'

import { useSellStore } from '@/app/store/sellStore'
import style from './transactionConfirmation.module.css'
import { getTokenImg } from '@/images/tokens'
import useUser from '@/hooks/useUser'

function TransactionConfirmation({ solPrice }: { solPrice: number }) {
  const { amount, tokenSymbol } = useSellStore()
  const { user } = useUser()
  const userAddress = user?.address as string
  const solanaEstimation = 1.21
  const projectImg = tokenSymbol?.toLowerCase() === 'sol' ? getTokenImg('sol') : '/Avatar.svg'

  const tokenFee = +amount * 0.001
  const solanaFee = solanaEstimation * 0.001

  const totalSolana = solanaEstimation + solanaFee
  const usdTotal = totalSolana * solPrice
  return (
    <section className={style.main}>
      <div className={style.mainInfo}>
        <img className={style.mainImage} src={projectImg} alt="Project-img" />
        <div>
          <p className={style.mainText}> {amount} {tokenSymbol}</p>
          <div className={style.mainCurrency}>
            <img src={getTokenImg('sol')} alt="Solana image" />
            <p className={style.mainCurrencyText}>2,456 SOL</p>
          </div>
        </div>
      </div>
      <div className={style.mainDiv}>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>To:</p>
          <div>
            <p className={style.addressText}>Address 1</p>
            <p className={style.addressDirection}>{`${userAddress?.slice(0, 6)}...${userAddress?.slice(-6)}`}</p>
          </div>
        </div>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Network:</p>
          <p className={style.addressText}>Solana</p>
        </div>
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Fee:</p>
          <div>
            <p className={style.addressText}>1.55 {tokenSymbol}</p>
            <p className={style.addressDirection}>0.03 {tokenFee}</p>
          </div>
        </div>
        <hr style={{ width: '100%' }} />
        <div className={style.toAddress}>
          <p className={style.toAddressText}>Total:</p>
          <p className={style.addressText}>$ {usdTotal?.toFixed(2)}</p>
        </div>
      </div>
    </section>
  )
}

export default TransactionConfirmation
