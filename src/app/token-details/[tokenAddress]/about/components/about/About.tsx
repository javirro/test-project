import style from './about.module.css'

function About({ description }: { description: string }) {
  return (
    <section className={style.main}>
      <p className={style.about}>About</p>
      <p className={style.text}>{description}</p>
    </section>
  )
}

export default About
