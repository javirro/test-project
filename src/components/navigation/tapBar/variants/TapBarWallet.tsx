import CopyButtonIcon from '@/images/buttons/components/copyButton'
import style from './tapBarWallet.module.css'
import useUser from '@/hooks/useUser'

function TapBarWallet() {
  const { user } = useUser()
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
