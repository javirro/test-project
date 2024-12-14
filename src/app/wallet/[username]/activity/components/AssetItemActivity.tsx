'use client'

import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'
import { TxAssetActivity } from '@/types/assetsList'
import SendButtonIcon from '@/images/status/components/sendButton'

const AssetItemActivity = ({ tx }: { tx: TxAssetActivity }) => {
  const { amount, symbol, name, type, projectImage } = tx
  const projectImg = projectImage ? projectImage : getTokenImg('sol')
  return (
    <div className={style.assetContainer}>
      <div className={style.imageContainer}>
        <img className={style.image} src={projectImg} alt="Project image" />
        <button className={style.badgeButton} style={{ backgroundColor: '#3A9F20' }}>
          <SendButtonIcon width="12" height="12" color="#fff" />
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={style.currency}>{type}</p>
        <p className={style.amount}>{name}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={style.amountInUsd}>
          {amount} {symbol}
        </p>
      </div>
    </div>
  )
}

export default AssetItemActivity
