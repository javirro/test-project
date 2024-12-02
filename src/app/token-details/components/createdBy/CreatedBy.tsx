import style from './createdBy.module.css'

interface CreatedByProps {
  createdOn: number
  creatorUsername: string
}

function CreatedBy({ createdOn, creatorUsername }: CreatedByProps) {
  const msCreatedOn = createdOn * 1000
  const createdDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
  }).format(new Date(msCreatedOn))
  return (
    <section className={style.main}>
      <p>Created</p>
      <div className={style.infoSection}>
        <img className={style.img} src="/Image.png" alt="" />
        <div className={style.userInfoSection}>
          <p className={style.name}>Alex Cánovas</p>
          <p className={style.userName}>{`@${creatorUsername}`}</p>
        </div>
        <button className={style.viewProfileButton}>View profile</button>
      </div>
      <p className={style.createdOn}>Created on {createdDate}</p>
    </section>
  )
}

export default CreatedBy
