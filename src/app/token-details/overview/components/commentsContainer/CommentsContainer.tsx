import style from './commentsContainer.module.css'
import Comment from './components/Comment'

function CommentsContainer() {
  return (
    <section className={style.main}>
      <p>Comentarios (123)</p>
      <div className={style.commentsDiv}>
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
      </div>
    </section>
  )
}

export default CommentsContainer
