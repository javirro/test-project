import { getCommentsAmount } from '@/dataFetching/projects/getLikeAndCommentsAmount'
import style from './commentsContainer.module.css'
import Comment from './components/Comment'
import { Suspense } from 'react'

async function CommentsContainer({ tokenAddress }: { tokenAddress: string }) {
  const totalComments: number = await getCommentsAmount(tokenAddress)
  return (
    <section className={style.main}>
      <p>Comentarios ({totalComments})</p>
      <div className={style.commentsDiv}>
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
        <Comment username="@username" comment="Insert witty comment here!" timePosted="6 hours ago" />
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
