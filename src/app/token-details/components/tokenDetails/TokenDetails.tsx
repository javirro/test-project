import ProjectAvatar from '@/components/avatars/ProjectAvatar'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import style from './tokenDetails.module.css'
import Likes from './Likes'
import { Project } from '@/types/project'


async function TokenDetails({ project, position, price }: { project: Project, position: number, price: number }) {
  const { tokenMintAddress, tokenName } = project

  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ProjectAvatar badget={false} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p className={style.nameText}>{tokenName}</p>
            <span className={style.rankPosition}>#{position}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p className={style.priceText}>${price?.toFixed(6)}</p>
            <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" fontSize="12px" />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Likes tokenAddress={tokenMintAddress} />
        {/* <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
          <div className={style.actionButtons}>
            <StarButtonIcon width="24" height="25" color="#707579" />
          </div>
          <p className={style.buttonsText}>12.4k </p>
        </div> */}
      </div>
    </div>
  )
}

export default TokenDetails
