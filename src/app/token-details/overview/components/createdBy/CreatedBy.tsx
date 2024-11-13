import style from './createdBy.module.css'

function CreatedBy() {
  return (
    <section className={style.main}>
      <p>Created</p>
      <div className={style.infoSection}>
        <img className={style.img} src="/Image.png" alt="" />
        <div className={style.userInfoSection}>
          <p className={style.name}>Alex Cánovas</p>
          <p className={style.userName}>@alex_234</p>
        </div>
        <button className={style.viewProfileButton}>View profile</button>
      </div>
      <p className={style.createdOn}>Created on 12/05/2024</p>
    </section>
  )
}

export default CreatedBy
