'use client'

import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './tokenDetails.module.css'
import { Dispatch, SetStateAction, useState } from 'react'
import useUser from '@/hooks/useUser'
import { useGetProjectLikes, useGetProjectLikeByUser } from '@/hooks/useGetProjectLikesComments'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import { manageLike } from '@/dataFetching/projects/manageLikeAndComments'

const LikesContent = ({ tokenAddress, setLikeRefresher }: { tokenAddress: string; setLikeRefresher: Dispatch<SetStateAction<number>> }) => {
  const { user, token } = useUser()
  const { likes, isLoading: likesLoading } = useGetProjectLikes(tokenAddress)
  const { userLike, userLikeLoading } = useGetProjectLikeByUser(tokenAddress, user?.username as string, token as string)

  const handleLike = async () => {
    try {
      await manageLike(tokenAddress, user?.username as string, token as string, user?.telegramId as number)
      setLikeRefresher((prev) => prev + 1)
    } catch (error) {
      console.error('Error managing like project: ', error)
    }
  }

  if (userLikeLoading || likesLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
        <div className={style.actionButtons}>
          <HeartButtonIcon width="24" height="25" color="#707579" />
        </div>
        <p className={style.buttonsText}>...</p>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
      <div className={style.actionButtons} onClick={handleLike}>
        <HeartButtonIcon width="24" height="25" color={userLike ? '#FF0000' : '#707579'} />
      </div>
      <p className={style.buttonsText}>{likes} </p>
    </div>
  )
}

const Likes = ({ tokenAddress }: { tokenAddress: string }) => {
  const [likeRefresher, setLikeRefresher] = useState<number>(0)
  return (
    <TanstackQueryProvider>
      <LikesContent tokenAddress={tokenAddress} setLikeRefresher={setLikeRefresher} key={likeRefresher} />
    </TanstackQueryProvider>
  )
}

export default Likes
