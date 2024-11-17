import ProjectAvatar from '@/components/avatars/ProjectAvatar'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import StarButtonIcon from '@/images/buttons/components/starButton'
import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './tokenDetails.module.css'

function TokenDetails() {
  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ProjectAvatar badget={false} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p className={style.nameText}>PEPE</p>
            <span className={style.rankPosition}>#1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p className={style.priceText}>$0,0054</p>
            <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" fontSize="12px" />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
          <div className={style.actionButtons}>
            <HeartButtonIcon width="24" height="25" color="#707579" />
          </div>
          <p className={style.buttonsText}>12.4k </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
          <div className={style.actionButtons}>
            <StarButtonIcon width="24" height="25" color="#707579" />
          </div>
          <p className={style.buttonsText}>12.4k </p>
        </div>
      </div>
    </div>
  )
}

export default TokenDetails
