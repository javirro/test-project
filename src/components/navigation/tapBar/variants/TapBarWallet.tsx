import CopyButtonIcon from '@/images/buttons/components/copyButton'
import style from './tapBarWallet.module.css'
import useUser from '@/hooks/useUser'

function TapBarWallet() {
  const { user } = useUser()
  const shortAddress = user?.address.slice(0, 10) + '...' + user?.address?.slice(-10)
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <button className={style.sellButton}>
          <CopyButtonIcon width="24" height="24" color="#707579" />
          {shortAddress}
        </button>
        <button className={style.buyButton}>Share</button>
      </div>
    </div>
  )
}

export default TapBarWallet
