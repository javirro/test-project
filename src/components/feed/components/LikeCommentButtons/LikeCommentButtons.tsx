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
      <div className={style.badgeContainer}>
        <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
        {likes ? <span className={style.badge}>{commentsAmount}</span> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <HeartButtonIcon width="30" height="30" color="#FFFFFF" />
          <p>{likes}</p>
        </div>
      </div>
    </section>
  )
}

export default LikeCommentButtons
