import ArrowRightButtonIcon from '@/images/buttons/components/arrowRightButton'
import style from './cardFrame.module.css'
import { CardLeaderBoardSkeleton } from '../cardLeaderBoard/CardLeaderBoard'

const CardFrameSkeleton = () => {
  const array = [1, 2, 3]
  return (
    <section className={style.main}>
      <div>
        <p className={style.mainText}>Ranking TOP 100</p>
        <p className={style.secondaryText}>The best crypto in our platform</p>
      </div>
      <ArrowRightButtonIcon color="#000000" height="24" width="24" />
      {array.map((_, index) => (
        <CardLeaderBoardSkeleton key={index} />
      ))}
    </section>
  )
}

export default CardFrameSkeleton
