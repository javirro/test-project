'use client'

import Comment from '@/app/token-details/components/commentsContainer/components/Comment'
import style from './commentsSection.module.css'
import { useGetProjectComments, useGetProjectCommentsAmount } from '@/hooks/useGetProjectLikesComments'

interface CommentsSectionProps {
  tokenMintAddress: string
  isCommentsAnimating: 'animateIn' | 'animateOut' | ''
  setIsCommentsAnimating: (value: 'animateIn' | 'animateOut' | '') => void
}

function CommentsSection({ tokenMintAddress }: CommentsSectionProps) {
  const { commentsAmount } = useGetProjectCommentsAmount(tokenMintAddress)
  const { comments, isLoading } = useGetProjectComments(tokenMintAddress)

  return (
    <section className={style.main}>
      <p>Comentarios ({commentsAmount})</p>
      {!isLoading && comments && (
        <div className={style.commentsDiv}>
          {comments?.map((comment, index) => (
            <Comment key={index} commentInfo={comment} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CommentsSection
