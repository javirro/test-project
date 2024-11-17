import HeartButtonIcon from '@/images/buttons/components/heartButton'
import style from './tokenDetails.module.css'
import { Suspense } from 'react'

const LikesContent = ({ tokenAddress }: { tokenAddress: string }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
      <div className={style.actionButtons}>
        <HeartButtonIcon width="24" height="25" color="#707579" />
      </div>
      <p className={style.buttonsText}>12.4k </p>
    </div>
  )
}

const Likes = ({ tokenAddress }: { tokenAddress: string }) => {
  return (
    <Suspense fallback={<div>...</div>}>
      <LikesContent tokenAddress={tokenAddress}/>
    </Suspense>
  )
}

export default Likes
