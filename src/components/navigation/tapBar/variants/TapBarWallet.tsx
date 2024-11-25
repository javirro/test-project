import { useTapBarStore } from '@/app/store/tapBarStore'
import CopyButtonIcon from '@/images/buttons/components/copyButton'
import style from './tapBarWallet.module.css'

function TapBarWallet() {
  const { walletAddress } = useTapBarStore()

  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>
          <CopyButtonIcon width="24" height="24" color="#707579" />
          {walletAddress}
        </button>
        <button className={style.buyButton}>Share</button>
      </div>
    </div>
  )
}

export default TapBarWallet
