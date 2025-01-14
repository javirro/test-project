'use client'

import { useState } from 'react'
import ArrowRightButtonIcon from '@/images/buttons/components/arrowRightButton'

import style from './userProjects.module.css'

const userProjects = [
  {
    image: '/project_image.png',
    name: 'Pepe',
    price: '0.0004221',
    gain: '+30%',
  },
  {
    image: '/project_image.png',
    name: 'Pepe',
    price: '0.0004221',
    gain: '+30%',
  },
  {
    image: '/project_image.png',
    name: 'Pepe',
    price: '0.0004221',
    gain: '+30%',
  },
  {
    image: '/project_image.png',
    name: 'Pepe',
    price: '0.0004221',
    gain: '+30%',
  },
]

const favorites = [
  {
    image: '/project_image.png',
    name: 'All coins',
    type: 'Private',
  },
  {
    image: '/project_image.png',
    name: 'Hidden gems',
    type: 'Private',
  },
]

function UserProjects() {
  const [isModalProjects, setIsModalProjects] = useState<boolean>(true)

  return (
    <section className={style.main}>
      <div className={style.buttonsDiv}>
        <button onClick={() => setIsModalProjects(true)} className={isModalProjects ? style.buttonActive : style.buttonInactive}>
          My projects (12)
        </button>
        <button onClick={() => setIsModalProjects(false)} className={isModalProjects ? style.buttonInactive : style.buttonActive}>
          Favorites
        </button>
      </div>
      {isModalProjects ? (
        <div className={style.divCard}>
          {userProjects.map((project) => (
            <div className={style.projectCard} key={project.name}>
              <img className={style.projectImage} src={project.image} alt="project-image" />
              <div className={style.projectInfo}>
                <p className={style.projectUpperSection}>
                  {project.name} <span className={style.projectGain}>{project.gain}</span>
                </p>
                <p className={style.projectBottomSection}>$ {project.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.divFavorites}>
          {favorites.map((list) => (
            <div key={list.name} className={style.divfavoritesCard}>
              <img className={style.divfavoritesCardImage} src={list.image} alt="project-image" />
              <div className={style.divfavoritesCardInfo}>
                <p className={style.divfavoritesCardName}>{list.name}</p>
                <p className={style.divfavoritesCardType}>{list.type}</p>
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

export default UserProjects
