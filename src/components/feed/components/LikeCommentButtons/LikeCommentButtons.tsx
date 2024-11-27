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
      <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
        <div className={style.badgeContainer}>
          <HeartButtonIcon width="30" height="30" color="#FFFFFF" />
          <span className={style.badge}>26</span>
        </div>
        <p>12.5k</p>
      </div>
    </section>
  )
}

export default LikeCommentButtons
