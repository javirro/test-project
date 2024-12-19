import style from './header.module.css'

function Header() {
  return (
    <div className={style.main}>
      <p className={style.mainText}>TOP 100</p>
      <p className={style.secondaryText}>Token projects</p>
      <img className={style.image} src="/top100cup.svg" alt="" />
    </div>
  )
}

export default Header
