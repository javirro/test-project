import CardLeaderBoard from '@/app/explore/components/cardLeaderBoard/CardLeaderBoard'
import style from './leaderBoard.module.css'

const mockCards = [
  {
    position: 1,
    image: 'https://via.placeholder.com/150',
    name: 'Pepe',
    marketCap: '3,567B',
  },
  {
    position: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Pepe',
    marketCap: '3,567B',
  },
  {
    position: 3,
    image: 'https://via.placeholder.com/150',
    name: 'Pepe',
    marketCap: '3,567B',
  },
]

function LeaderBoard() {
  return (
    <section className={style.main}>
      <div style={{ width: '100%' }}>
        <p className={style.firstText}>The leaderboard will be reset in:</p>
        <p className={style.secondText}>00:03:56:13</p>
      </div>
      <div className={style.cardSection}>
        {mockCards.map((card) => (
          <CardLeaderBoard key={card.position} position={card.position} image={card.image} name={card.name} marketCap={card.marketCap} />
        ))}
      </div>
    </section>
  )
}

export default LeaderBoard
