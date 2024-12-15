import { ProjectComments } from '@/types/project'
import style from './comment.module.css'
import { getUserImage } from '@/dataFetching/users/getUserImage'

interface CommentProps {
  commentInfo: ProjectComments
}

async function Comment({ commentInfo }: CommentProps) {
  const { username, comment, creationDate } = commentInfo
  const timePosted = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
  }).format(new Date(creationDate * 1000))
  const creatorImage = await getUserImage(username)
  return (
    <div className={style.main}>
      <img className={style.img} src={creatorImage} alt="user-profile img" />
      <div>
        <p className={style.username}>{username}</p>
        <p className={style.comment}>{comment}</p>
      </div>
      <p className={style.timePosted}>{timePosted}</p>
    </div>
  )
}

export default Comment
