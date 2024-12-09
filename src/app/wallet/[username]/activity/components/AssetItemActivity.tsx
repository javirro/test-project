'use client'

import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'
import { assetActivity } from '@/types/assetsList'
import SendButtonIcon from '@/images/status/components/sendButton'

const AssetItemActivity = ({ asset }: { asset: assetActivity }) => {
  return (
    <div className={style.assetContainer}>
      <div className={style.imageContainer}>
        <img className={style.image} src={getTokenImg(asset.symbol.toLowerCase())} alt="" />
        <button className={style.badgeButton} style={{ backgroundColor: '#3A9F20' }}>
          <SendButtonIcon width="12" height="12" color="#fff" />
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={style.currency}>{asset.type}</p>
        <p className={style.amount}>{asset.address}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={style.amountInUsd}>
          {asset.amount} {asset.symbol}
        </p>
        <p className={style.gains}>
          {asset.gains} {asset.symbol}
        </p>
      </div>
    </div>
  )
}

export default AssetItemActivity
