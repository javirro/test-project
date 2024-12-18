'use client'

import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './likeCommentButtons.module.css'
import { useGetProjectCommentsAmount, useGetProjectLikeByUser, useGetProjectLikes } from '@/hooks/useGetProjectLikesComments'
import useUser from '@/hooks/useUser'
import { manageLike } from '@/dataFetching/projects/manageLikeAndComments'
import { Dispatch, SetStateAction, useState } from 'react'

const LikeCommentButtons = ({ tokenMintAddress, toggleDropdown }: { tokenMintAddress: string; toggleDropdown: () => void }) => {
  const { commentsAmount, isLoading: commentsLoading } = useGetProjectCommentsAmount(tokenMintAddress)
  const [likeRefresher, setLikeRefresher] = useState<number>(0)
  if (commentsLoading) return <div></div>

  return (
    <section className={style.likeContainer}>
      <button className={style.badgeContainer} onClick={() => toggleDropdown()}>
        <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
        <span className={style.badge}>{commentsAmount}</span>
      </button>
      <LikeButton tokenMintAddress={tokenMintAddress} setLikeRefresher={setLikeRefresher} key={likeRefresher} />
    </section>
  )
}

export default LikeCommentButtons

const LikeButton = ({ tokenMintAddress, setLikeRefresher }: { tokenMintAddress: string; setLikeRefresher: Dispatch<SetStateAction<number>> }) => {
  const { user, token } = useUser()
  const { likes, isLoading: likesLoading } = useGetProjectLikes(tokenMintAddress)
  const { userLike, userLikeLoading } = useGetProjectLikeByUser(tokenMintAddress, user?.username as string, token as string)
  if (userLikeLoading || likesLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <HeartButtonIcon width="30" height="30" color={'#C2C5CC'} />
          <p>...</p>
        </div>
      </div>
    )
  }
  const handleLike = async () => {
    try {
      await manageLike(tokenMintAddress, user?.username as string, token as string, user?.telegramId as number)
      setLikeRefresher((prev) => prev + 1)
    } catch (error) {
      console.error('Error managing like project: ', error)
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }} onClick={handleLike}>
        <HeartButtonIcon width="30" height="30" color={userLike ? '#FF0000' : '#FFFFFF'} />
        <p>{likes}</p>
      </div>
    </div>
  )
}
