import style from './cardFrame.module.css'
import ArrowRightButtonIcon from '@/images/buttons/components/arrowRightButton'
import CardLeaderBoard from '../cardLeaderBoard/CardLeaderBoard'
import Link from 'next/link'

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

function CardFrame() {
  return (
    <section className={style.main}>
      <Link href="/explore/top100" className={style.headerContainer}>
        <div>
          <p className={style.mainText}>Ranking TOP 100</p>
          <p className={style.secondaryText}>The best crypto in our platform</p>
        </div>
        <ArrowRightButtonIcon color="#000000" height="24" width="24" />
      </Link>
      {mockCards.map((card) => (
        <CardLeaderBoard key={card.position} position={card.position} image={card.image} name={card.name} marketCap={card.marketCap} />
      ))}
    </section>
  )
}

export default CardFrame
