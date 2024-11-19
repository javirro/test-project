import { getComments, getCommentsAmount } from '@/dataFetching/projects/getLikeAndCommentsAmount'
import style from './commentsContainer.module.css'
import Comment from './components/Comment'
import { Suspense } from 'react'
import { ProjectComments } from '@/types/project'

async function CommentsContainer({ tokenAddress }: { tokenAddress: string }) {
  const totalComments: number = await getCommentsAmount(tokenAddress)
  const comments: ProjectComments[] = await getComments(tokenAddress)
  return (
    <section className={style.main}>
      <p>Comentarios ({totalComments})</p>
      <div className={style.commentsDiv}>
        {comments.map((comment, index) => (
          <Comment key={index} commentInfo={comment} />
        ))}
      </div>
    </section>
  )
}

const CommentsContainerWrapper = ({ tokenAddress }: { tokenAddress: string }) => {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <CommentsContainer tokenAddress={tokenAddress} />
    </Suspense>
  )
}

export default CommentsContainerWrapper
