import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'

interface AssetProps {
  currency: string
  network: string
  amount: number
  gains: number
  amountInUSD: number
}

interface Asset {
  asset: AssetProps[]
}

function Asset({ asset }: Asset) {
  let index = 0

  return (
    <>
      {asset.map((asset) => (
        <div className={style.assetContainer} key={index++}>
          <img className={style.image} src={getTokenImg(asset.network.toLowerCase())} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <p className={style.currency}>{asset.currency}</p>
            <p className={style.amount}>
              {asset.amount} <span>{asset.network}</span>
            </p>
          </div>
          <div>
            <p className={style.amountInUsd}>${asset.amountInUSD}</p>
            <p className={style.gains}>+${asset.gains}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Asset
