import { ProjectMarketCap } from '@/types/prices'
import style from './cardLeaderBoard.module.css'

interface cardLeaderBoardProps {
  position: number
  project: ProjectMarketCap

}

function CardLeaderBoard({ position, project}: cardLeaderBoardProps) {
  const { image, tokenName, marketCap } = project
  const imageToUse = image ? image : 'https://via.placeholder.com/150'
  const realPosition = position + 1
  return (
    <div className={style.main} key={position}>
      <p className={style.position}>#{realPosition}</p>
      <img className={style.image} src={imageToUse} alt="projectImg" />
      <p className={style.name}>{tokenName}</p>
      <p className={style.marketCap}>Mkt. Cap: {marketCap?.toFixed(8)} $</p>
    </div>
  )
}

export default CardLeaderBoard


export const CardLeaderBoardSkeleton = () => {
  return(
    <div className={style.shimmer}></div>
  )
}