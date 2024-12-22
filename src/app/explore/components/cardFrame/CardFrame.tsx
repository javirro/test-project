import style from './cardFrame.module.css'
import ArrowRightButtonIcon from '@/images/buttons/components/arrowRightButton'
import CardLeaderBoard from '../cardLeaderBoard/CardLeaderBoard'
import Link from 'next/link'
import { getFullProjectsListWithMarketcap } from '@/dataFetching/prices/getFullProjectsListWithMarketcap'
import { ProjectMarketCap } from '@/types/prices'

async function CardFrame() {
  const projectsDataWithMarketCap = await getFullProjectsListWithMarketcap()
  const top3Projects: ProjectMarketCap[] = projectsDataWithMarketCap.slice(0, 3)
  return (
    <section className={style.main}>
      <Link href="/explore/top100" className={style.headerContainer}>
        <div>
          <p className={style.mainText}>Ranking TOP 100</p>
          <p className={style.secondaryText}>The best crypto in our platform</p>
        </div>
        <ArrowRightButtonIcon color="#000000" height="24" width="24" />
      </Link>
      {top3Projects.map((p, index) => (
        <CardLeaderBoard key={p.tokenName} position={index} project={p} />
      ))}
    </section>
  )
}

export default CardFrame
