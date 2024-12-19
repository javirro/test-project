import style from './cardLeaderBoard.module.css'

interface cardLeaderBoardProps {
  position: number
  image: string
  name: string
  marketCap: string
}

function CardLeaderBoard({ position, image, name, marketCap }: cardLeaderBoardProps) {
  return (
    <div className={style.main}>
      <p className={style.position}>#{position}</p>
      <img className={style.image} src={image} alt="user-profile img" />
      <p className={style.name}>{name}</p>
      <p className={style.marketCap}>Mkt. Cap: {marketCap}</p>
    </div>
  )
}

export default CardLeaderBoard
