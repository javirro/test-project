import { TOTAL_SUPPLY_TEXT } from '@/contracts/lamportSolConverter'
import style from './marketInfoContainer.module.css'
import { Project } from '@/types/project'

function MarketInfoContainer({ project }: { project: Project }) {
  const { description } = project
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
            <p className={style.textQuantity}>{TOTAL_SUPPLY_TEXT}</p>
            <p className={style.textQuantityInfo}>Total supply</p>
          </div>
        </div>
        <div className={style.secondContainer}>
          <p className={style.about}>About</p>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default MarketInfoContainer
