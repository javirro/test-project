'use client'

import { useState } from 'react'
import ArrowRightButtonIcon from '@/images/buttons/components/arrowRightButton'
import style from './userProjects.module.css'
import { ProjectWatchList } from '@/types/project'

interface ProjectsListProfileProps {
  userProjects: {
    tokenName: string
    tokenMintAddress: string
    image: string
  }[]
  favoriteProjects: ProjectWatchList[]
}
const ProjectsListProfile = ({userProjects, favoriteProjects}: ProjectsListProfileProps) => {
  const [isModalProjects, setIsModalProjects] = useState<boolean>(true)
  return (
    <section className={style.main}>
      <div className={style.buttonsDiv}>
        <button onClick={() => setIsModalProjects(true)} className={isModalProjects ? style.buttonActive : style.buttonInactive}>
          My projects ({userProjects.length})
        </button>
        <button onClick={() => setIsModalProjects(false)} className={isModalProjects ? style.buttonInactive : style.buttonActive}>
          Favorites
        </button>
      </div>
      {isModalProjects ? (
        <div className={style.divCard}>
          {userProjects.map((project) => (
            <div className={style.projectCard} key={project.tokenName}>
              <img className={style.projectImage} src={project.image} alt="project-image" />
              <div className={style.projectInfo}>
                <p className={style.projectUpperSection}>
                  {project.tokenName} <span className={style.projectGain}>{10.2}</span>
                </p>
                <p className={style.projectBottomSection}>$ {0.000321}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.divFavorites}>
          {favoriteProjects.map((project) => (
            <div key={project.tokenName} className={style.divfavoritesCard}>
              <img className={style.divfavoritesCardImage} src={project.image} alt="project-image" />
              <div className={style.divfavoritesCardInfo}>
                <p className={style.divfavoritesCardName}>{project.tokenName}</p>
                <p className={style.divfavoritesCardType}>{project.tokenName}</p>
              </div>
              <button className={style.divfavoritesCardButton}>
                <ArrowRightButtonIcon color="#707579" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectsListProfile