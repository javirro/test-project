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

function UserProjects() {
  return (
    <section className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.buttonActive}>My projects (12)</button>
        <button className={style.buttonInactive}>Favorites</button>
      </div>
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
    </section>
  )
}

export default UserProjects
