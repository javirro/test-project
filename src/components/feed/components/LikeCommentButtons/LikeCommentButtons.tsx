'use client'

import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './likeCommentButtons.module.css'
import { useGetProjectCommentsAmount, useGetProjectLikes } from '@/hooks/useGetProjectLikesComments'

const LikeCommentButtons = ({ tokenMintAddress }: { tokenMintAddress: string }) => {
  const { likes, isLoading: likesLoading } = useGetProjectLikes(tokenMintAddress)
  const { commentsAmount, isLoading: commentsLoading } = useGetProjectCommentsAmount(tokenMintAddress)
  if (likesLoading || commentsLoading) return <div></div>
  console.log({ likes, commentsAmount })
  return (
    <section className={style.likeContainer}>
      <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
      <HeartButtonIcon width="30" height="30" color="#FFFFFF" />
    </section>
  )
}

export default LikeCommentButtons
