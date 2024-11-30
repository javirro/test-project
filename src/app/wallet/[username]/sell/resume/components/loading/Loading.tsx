import style from './loading.module.css'

function Loading() {
  return (
    <>
      <p className={style.text}>Loading...</p>
      <div className={style.mainDiv}>
        <img className={style.gif} src="/loader.gif" alt="" />
        <button className={style.button}>See transaction</button>
      </div>
    </>
  )
}

export default Loading
