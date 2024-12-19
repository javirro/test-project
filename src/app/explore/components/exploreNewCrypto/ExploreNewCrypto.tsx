import style from './exploreNewCrypto.module.css'
import ExploreNewCryptoCard from '../exploreNewCryptoCard/ExploreNewCryptoCard'

const mockCards = [
  {
    image: '/top100.png',
    name: 'Pepe',
    url: '/explore/pepe',
  },
  {
    image: '/top200.png',
    name: 'Pepe',
    url: '/explore/pepe',
  },
  {
    image: '/newly.png',
    name: 'Pepe',
    url: '/explore/pepe',
  },
  {
    image: '/growingFast.png',
    name: 'Pepe',
    url: '/explore/pepe',
  },
]

function ExploreNewCrypto() {
  return (
    <section className={style.main}>
      <p className={style.mainText}>Explore new crypto</p>
      <p className={style.secondaryText}>Im looking for...</p>
      <div className={style.mainSection}>
        <div className={style.section}>
          <ExploreNewCryptoCard image={mockCards[0].image} name={mockCards[0].name} url={mockCards[0].url} />
          <ExploreNewCryptoCard image={mockCards[1].image} name={mockCards[1].name} url={mockCards[1].url} />
        </div>
        <div className={style.section}>
          <ExploreNewCryptoCard image={mockCards[2].image} name={mockCards[2].name} url={mockCards[2].url} />
          <ExploreNewCryptoCard image={mockCards[3].image} name={mockCards[3].name} url={mockCards[3].url} />
        </div>
      </div>
    </section>
  )
}

export default ExploreNewCrypto
