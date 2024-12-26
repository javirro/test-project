import style from './followsHeader.module.css'

function FollowsHeader() {
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.buttonActive}>Following</button>
        <button className={style.buttonInactive}>Followers</button>
        <button className={style.buttonInactive}>Projects</button>
      </div>
      <input className={style.input} type="search" name="" placeholder="Find a person" id="" />
    </div>
  )
}

export default FollowsHeader
