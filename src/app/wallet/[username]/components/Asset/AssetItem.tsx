'use client'

import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'
import { useNavBarStore } from '@/app/store/navBarStore'
import { usePathname, useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { Asset } from '@/types/assetsList'
import { useSendStore } from '@/app/store/sendStore'

const AssetItem = ({ asset }: { asset: Asset; username: string }) => {
  const pathname = usePathname()
  const router = useRouter()
  const isSell = pathname.endsWith('sell')
  const {setTokenName, setTokenSymbol, setTokenAddress} = useSendStore()
  const { setActionNavBarMessage } = useNavBarStore()
  const onClick = () => {
    setActionNavBarMessage(`${isSell ? 'Sell' : 'Send'} ${asset.name}`)
    if (isSell) {
      setCookie('sellStep', '2')
      setCookie(
        'sellToken',
        JSON.stringify({
          name: asset.name,
          symbol: asset.symbol,
          address: asset.address,
        })
      )
    } else {
      setCookie('sendStep', '2')
      setTokenName(asset.name)
      setTokenSymbol(asset.symbol)
      setTokenAddress(asset.address)
    }
    router.refresh()
  }
  return (
    <div className={style.assetContainer} onClick={onClick}>
      <img className={style.image} src={getTokenImg(asset.symbol.toLowerCase())} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={style.currency}>{asset.name}</p>
        <p className={style.amount}>
          {asset.amount} <span>{asset.symbol}</span>
        </p>
      </div>
      <div>
        <p className={style.amountInUsd}>${asset.amountInUSD}</p>
        <p className={style.gains}>${asset.gains}</p>
      </div>
    </div>
  )
}

export default AssetItem
