import { ProjectComments } from '@/types/project'
import style from './comment.module.css'
import { useGetUserImage } from '@/hooks/useGetUserData'

interface CommentProps {
  commentInfo: ProjectComments
}

function ClientComment({ commentInfo }: CommentProps) {
  const { username, comment, creationDate } = commentInfo
  const timePosted = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
  }).format(new Date(creationDate * 1000))
  const { userImage, isLoading } = useGetUserImage(username)

  return (
    <div className={style.main}>
      {userImage && !isLoading && <img className={style.img} src={userImage} alt="user-profile img" />}
      <div>
        <p className={style.username}>{username}</p>
        <p className={style.comment}>{comment}</p>
      </div>
      <p className={style.timePosted}>{timePosted}</p>
    </div>
  )
}

export default ClientComment
