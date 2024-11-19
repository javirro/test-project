import { ProjectComments } from '@/types/project'
import style from './comment.module.css'

interface CommentProps {
  commentInfo: ProjectComments
}

function Comment({ commentInfo }: CommentProps) {
  const { username, comment, creationDate } = commentInfo
  const timePosted = new Date(creationDate).toLocaleString()
  return (
    <div className={style.main}>
      <img
        className={style.img}
        src="
      /Image.png"
        alt=""
      />
      <div>
        <p className={style.username}>{username}</p>
        <p className={style.comment}>{comment}</p>
      </div>
      <p className={style.timePosted}>{timePosted}</p>
    </div>
  )
}

export default Comment
