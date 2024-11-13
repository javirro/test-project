import Badget from '../status/Badget'
import AddButtonIcon from '@/images/tapBar/components/addButton'
import style from './projectAvatar.module.css'

interface ProjectAvatarProps {
  badget: boolean
}

function ProjectAvatar({ badget }: ProjectAvatarProps) {
  return (
    <div className={style.container}>
      <div className={style.avatar}></div>
      {badget && (
        <Badget backgroundColor="#E53935" width="25px" height="25px">
          <AddButtonIcon width="15" height="15" color="#fff" />
        </Badget>
      )}
    </div>
  )
}

export default ProjectAvatar
