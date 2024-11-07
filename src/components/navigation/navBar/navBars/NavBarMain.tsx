import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ConfigButtonIcon from '@/images/navBar/components/configButton'
import style from './navBars.module.css'

function NavBarMain() {
  return (
    <div className={style.profileNavBar}>
      <div>
        <p className={style.text}>Title</p>
      </div>
      <ConfigButtonIcon width="24" height="24" color="#707579" />
    </div>
  )
}

export default NavBarMain
