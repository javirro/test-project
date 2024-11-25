'use client'

import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'
import { useRouter } from 'next/navigation'
import { useNavBarStore } from '@/app/store/navBarStore'

interface AssetProps {
  currency: string
  network: string
  amount: number
  gains: number
  amountInUSD: number
}

interface Asset {
  asset: AssetProps[]
  isHandleClick?: boolean
  username?: string
}

function Asset({ asset, isHandleClick, username }: Asset) {
  const { setActionNavBarMessage } = useNavBarStore()
  const router = useRouter()

  const handleClick = (currency: string) => {
    router.push(`/wallet/${username}/send/address`)
    setActionNavBarMessage(`Send ${currency}`)
  }

  return (
    <>
      {asset.map((asset) => (
        <div onClick={() => isHandleClick && handleClick(asset.currency)} className={style.assetContainer} key={asset.currency}>
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
