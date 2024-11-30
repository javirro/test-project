import style from './amountInformation.module.css'

function AmountInformation() {
  return (
    <section className={style.main}>
      <div className={style.amountContainer}>
        <p className={style.dollar}>$</p>
        <p className={style.amount}>0</p>
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
