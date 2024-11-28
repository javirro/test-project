'use client'

import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './likeCommentButtons.module.css'
import { useGetProjectCommentsAmount, useGetProjectLikes } from '@/hooks/useGetProjectLikesComments'
import { useUserStore } from '@/app/store/userStore'

const LikeCommentButtons = ({ tokenMintAddress }: { tokenMintAddress: string }) => {
  const { user } = useUserStore()
  const { likes, isLoading: likesLoading } = useGetProjectLikes(tokenMintAddress)
  const { commentsAmount, isLoading: commentsLoading } = useGetProjectCommentsAmount(tokenMintAddress)

  if (likesLoading || commentsLoading) return <div></div>
  console.log({ likes, commentsAmount })

  return (
    <section className={style.likeContainer}>
      <div className={style.badgeContainer}>
        <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
        <span className={style.badge}>{likes}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
        <div>
          <HeartButtonIcon width="30" height="30" color="#FFFFFF" />
          <p>{commentsAmount}k</p>
        </div>
      </div>
    </section>
  )
}

export default LikeCommentButtons
