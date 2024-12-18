import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ConfigButtonIcon from '@/images/navBar/components/configButton'
import Link from 'next/link'
import style from './navBars.module.css'



function ProfileNavBar() {
  return (
    <div className={style.profileNavBar}>
      <Link
        href="/"
        prefetch={true}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none' }}
      >
        <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
        <p className={style.text}>Home</p>
      </Link>
      <ConfigButtonIcon width="24" height="24" color="#707579" />
    </div>
  )
}

export default ProfileNavBar
