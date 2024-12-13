import ArrowLeftButtonIcon from '@/images/navBar/components/arrowLeft'
import ShareButtonIcon from '@/images/navBar/components/shareButton'
import style from './navBars.module.css'
import { useProjectStore } from '@/app/store/projectStore'
import Link from 'next/link'


function ProjectPublicNavBar() {
  const { project } = useProjectStore()

  return (
    <div className={style.projectPublicNavBarMain}>
      <div>
        <Link href="/"  style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none' }}>
          <ArrowLeftButtonIcon width="24" height="24" color="#000000" />
          <p className={style.text}>{project?.tokenName}</p>
        </Link>
      </div>
      <ShareButtonIcon width="24" height="24" color="#707579" />
    </div>
  )
}

export default ProjectPublicNavBar
