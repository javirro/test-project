import style from './tapBarTokenActions.module.css'

function TapBarTokenActions() {
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>Sell</button>
        <button className={style.buyButton}>Buy now</button>
      </div>
    </div>
  )
}

export default TapBarTokenActions
