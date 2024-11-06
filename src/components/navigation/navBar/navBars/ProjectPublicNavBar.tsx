import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ShareButtonIcon from '@/images/navBar/components/shareButton'
import style from './navBars.module.css'

function ProjectPublicNavBar() {
  return (
    <div className={style.projectPublicNavBarMain}>
      <div>
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <p className={style.text}>PEPE</p>
      </div>
      <ShareButtonIcon width="24" height="24" color="#707579" />
    </div>
  )
}

export default ProjectPublicNavBar
