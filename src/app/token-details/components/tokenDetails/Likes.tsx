import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './tokenDetails.module.css'
import { Suspense } from 'react'
import { getLikeAmount } from '@/dataFetching/projects/getLikeAndCommentsAmount'

const LikesContent = async ({ tokenAddress }: { tokenAddress: string }) => {
  const likesAmount = await getLikeAmount(tokenAddress)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
      <div className={style.actionButtons}>
        <HeartButtonIcon width="24" height="25" color="#707579" />
      </div>
      <p className={style.buttonsText}>{likesAmount} </p>
    </div>
  )
}

const Likes = ({ tokenAddress }: { tokenAddress: string }) => {
  return (
    <Suspense
      fallback={
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
          <div className={style.actionButtons}>
            <HeartButtonIcon width="24" height="25" color="#707579" />
          </div>
          <p className={style.buttonsText}>... </p>
        </div>
      }
    >
      <LikesContent tokenAddress={tokenAddress} />
    </Suspense>
  )
}

export default Likes
