import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ConfigButtonIcon from '@/images/navBar/components/configButton'
import ShareButtonIcon from '@/images/navBar/components/shareButton'
import style from './navBars.module.css'

function ProfileNavBarBack() {
  return (
    <div className={style.profileNavBarBack}>
      <div className={style.profileNavBarNameSection}>
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <p className={style.text}>PEPE</p>
      </div>
      <div className={style.profileNavBarButtonsSection}>
        <ShareButtonIcon width="24" height="24" color="#707579" />
        <ConfigButtonIcon width="24" height="24" color="#707579" />
      </div>
    </div>
  )
}

export default ProfileNavBarBack
