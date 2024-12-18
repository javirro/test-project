import { getComments, getCommentsAmount } from '@/dataFetching/projects/getLikeAndCommentsAmount'
import Comment from '@/app/token-details/components/commentsContainer/components/Comment'
import { ProjectComments } from '@/types/project'
import style from './commentsSection.module.css'
import { Suspense } from 'react'

interface CommentsSectionProps {
  tokenMintAddress: string
  isCommentsAnimating: 'animateIn' | 'animateOut' | ''
  setIsCommentsAnimating: (value: 'animateIn' | 'animateOut' | '') => void
}

function CommentsSection({ tokenMintAddress }: CommentsSectionProps) {
  async function CommentsContainer({ tokenAddress }: { tokenAddress: string }) {
    const totalComments: number = await getCommentsAmount(tokenAddress)
    const comments: ProjectComments[] = await getComments(tokenAddress)
    return (
      <section className={style.main}>
        <p>Comentarios ({totalComments})</p>
        <div className={style.commentsDiv}>
          {comments.map((comment, index) => (
            <Suspense fallback={<div>....</div>} key={index}>
              <Comment key={index} commentInfo={comment} />
            </Suspense>
          ))}
        </div>
      </section>
    )
  }

  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <CommentsContainer tokenAddress={tokenMintAddress} />
    </Suspense>
  )
}

export default CommentsSection
