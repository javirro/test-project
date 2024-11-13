import style from './comment.module.css'

interface CommentProps {
  username: string
  comment: string
  timePosted: string
}

function Comment({ username, comment, timePosted }: CommentProps) {
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
