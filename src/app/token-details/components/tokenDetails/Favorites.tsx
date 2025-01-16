'use client'

import StarButtonIcon from '@/images/buttons/components/starButton'
import style from './tokenDetails.module.css'
import { Dispatch, SetStateAction, useState } from 'react'
import useUser from '@/hooks/useUser'
import { useGetProjectLikeByUser } from '@/hooks/useGetProjectLikesComments'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import { manageLike } from '@/dataFetching/projects/manageLikeAndComments'

const FavoritesContent = ({ tokenAddress, setLikeRefresher }: { tokenAddress: string; setLikeRefresher: Dispatch<SetStateAction<number>> }) => {
  const { user, token } = useUser()
  const { userLike, userLikeLoading } = useGetProjectLikeByUser(tokenAddress, user?.username as string, token as string)

  const handleLike = async () => {
    try {
      await manageLike(tokenAddress, user?.username as string, token as string, user?.telegramId as number)
      setLikeRefresher((prev) => prev + 1)
    } catch (error) {
      console.error('Error managing like project: ', error)
    }
  }

  if (userLikeLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
        <div className={style.actionButtons}>
          <StarButtonIcon width="24" height="25" color="#707579" />
        </div>
        <p className={style.buttonsText}>...</p>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
      <div className={style.actionButtons} onClick={handleLike}>
        <StarButtonIcon width="24" height="25" color={userLike ? '#F7C84F' : '#707579'} />
      </div>
      <p className={style.buttonsText}></p>
    </div>
  )
}

const Favorites = ({ tokenAddress }: { tokenAddress: string }) => {
  const [likeRefresher, setLikeRefresher] = useState<number>(0)
  return (
    <TanstackQueryProvider>
      <FavoritesContent tokenAddress={tokenAddress} setLikeRefresher={setLikeRefresher} key={likeRefresher} />
    </TanstackQueryProvider>
  )
}

export default Favorites
