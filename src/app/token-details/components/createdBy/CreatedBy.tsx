import style from './createdBy.module.css'

interface CreatedByProps {
  createdOn: number
  creatorAddress: string
}

function CreatedBy({ createdOn, creatorAddress }: CreatedByProps) {
  const msCreatedOn = createdOn * 1000
  const createdDate = new Date(msCreatedOn).toLocaleDateString()
  console.log('Creator address', creatorAddress)
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
      <p className={style.createdOn}>Created on {createdDate}</p>
    </section>
  )
}

export default CreatedBy
