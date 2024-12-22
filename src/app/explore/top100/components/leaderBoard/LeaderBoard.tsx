import CardLeaderBoard from '@/app/explore/components/cardLeaderBoard/CardLeaderBoard'
import style from './leaderBoard.module.css'
import { getFullProjectsListWithMarketcap } from '@/dataFetching/prices/getFullProjectsListWithMarketcap'

async function LeaderBoard() {
  const projectsDataWithMarketCap = await getFullProjectsListWithMarketcap()
  return (
    <section className={style.main}>
      <div style={{ width: '100%' }}>
        <p className={style.firstText}>The leaderboard will be reset in:</p>
        <p className={style.secondText}>00:03:56:13</p>
      </div>
      <div className={style.cardSection}>
        {projectsDataWithMarketCap.map((p, index) => (
          <CardLeaderBoard key={p.tokenName} position={index} project={p} />
        ))}
      </div>
    </section>
  )
}

export default LeaderBoard
