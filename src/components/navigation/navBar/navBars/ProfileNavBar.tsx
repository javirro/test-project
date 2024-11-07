import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ConfigButtonIcon from '@/images/navBar/components/configButton'
import style from './navBars.module.css'

function ProfileNavBar() {
  return (
    <div className={style.profileNavBar}>
      <div>
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <p className={style.text}>PEPE</p>
      </div>
      <ConfigButtonIcon width="24" height="24" color="#707579" />
    </div>
  )
}

export default ProfileNavBar
