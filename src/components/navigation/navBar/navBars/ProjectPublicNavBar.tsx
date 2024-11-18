import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ShareButtonIcon from '@/images/navBar/components/shareButton'
import style from './navBars.module.css'

interface ProfileNavBarProps {
  onBackClick?: () => void
}

function ProjectPublicNavBar({ onBackClick }: ProfileNavBarProps) {
  return (
    <div className={style.projectPublicNavBarMain}>
      <div>
        <button onClick={onBackClick} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none' }}>
          <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
          <p className={style.text}>PEPE</p>
        </button>
      </div>
      <ShareButtonIcon width="24" height="24" color="#707579" />
    </div>
  )
}

export default ProjectPublicNavBar
