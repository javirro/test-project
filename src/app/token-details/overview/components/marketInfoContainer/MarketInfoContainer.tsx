import style from './marketInfoContainer.module.css'

function MarketInfoContainer() {
  return (
    <section className={style.main}>
      <div className={style.secondary}>
        <div className={style.firstContainer}>
          <div>
            <p className={style.textQuantity}>25.5K</p>
            <p className={style.textQuantityInfo}>Market Cap</p>
          </div>
          <div>
            <p className={style.textQuantity}>$ 36.96 B</p>
            <p className={style.textQuantityInfo}>Volume (24h)</p>
          </div>
          <div>
            <p className={style.textQuantity}>15.25 B</p>
            <p className={style.textQuantityInfo}>Total supply</p>
          </div>
        </div>
        <div className={style.secondContainer}>
          <p className={style.about}>About</p>
          <p className={style.description}>
            ShibaSwap gives users the ability to DIG (provide liquidity), BURY ...ShibaSwap gives users the ability to DIG (provide liquidity), BURY ...
          </p>
        </div>
      </div>
    </section>
  )
}

export default MarketInfoContainer
