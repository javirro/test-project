import style from './exploreNewCryptoCard.module.css'
import Link from 'next/link'

interface exploreNewCryptoCardProps {
  image: string
  name: string
  url: string
}

function ExploreNewCryptoCard({ image, name, url }: exploreNewCryptoCardProps) {
  return (
    <Link className={style.main} href={url}>
      <img className={style.image} src={image} alt="image" />
      <div className={style.secondSection}>
        <p className={style.text}>{name}</p>
      </div>
    </Link>
  )
}

export default ExploreNewCryptoCard
