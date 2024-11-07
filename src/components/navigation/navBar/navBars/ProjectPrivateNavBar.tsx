import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ConfigButtonIcon from '@/images/navBar/components/configButton'
import EditButtonIcon from '@/images/navBar/components/editButton'
import style from './navBars.module.css'

function ProjectPrivateNavBar() {
  return (
    <div className={style.projectPrivateNavBarMain}>
      <div>
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <div>
          <img src="/Avatar.svg" alt="avatar" width="40" height="40" />
        </div>
        <div>
          <p className={style.text}>PEPE</p>
          <p style={{ color: '#707579' }}>PEP</p>
        </div>
      </div>
      <button className={style.projectPrivateNavBarEditButton}>
        <EditButtonIcon width="24" height="24" color="#494E05CC" />
        Edit
      </button>
    </div>
  )
}

export default ProjectPrivateNavBar
