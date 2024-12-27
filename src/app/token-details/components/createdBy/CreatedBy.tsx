import Link from 'next/link'
import style from './createdBy.module.css'

interface CreatedByProps {
  createdOn: number
  creatorUsername: string
  creatorImage: string
}

async function CreatedBy({ createdOn, creatorUsername, creatorImage }: CreatedByProps) {
  const msCreatedOn = createdOn * 1000
  const createdDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
  }).format(new Date(msCreatedOn))

  return (
    <section className={style.main}>
      <p>Created</p>
      <div className={style.infoSection}>
        <img className={style.img} src={creatorImage} alt="user-profile img" />
        <div className={style.userInfoSection}>
          <p className={style.name}>{`@${creatorUsername}`}</p>
        </div>
        <Link href={`/profile/${creatorUsername}`} className={style.viewProfileButton}>View profile</Link>
      </div>
      <p className={style.createdOn}>Created on {createdDate}</p>
    </section>
  )
}

export default CreatedBy
