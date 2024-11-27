import CopyButtonIcon from '@/images/buttons/components/copyButton'
import style from './tapBarWallet.module.css'
import { useUserStore } from '@/app/store/userStore'

function TapBarWallet() {
  const { user } = useUserStore()
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>
          <CopyButtonIcon width="24" height="24" color="#707579" />
          {user?.address}
        </button>
        <button className={style.buyButton}>Share</button>
      </div>
    </div>
  )
}

export default TapBarWallet
