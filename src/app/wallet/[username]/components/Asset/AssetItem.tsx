'use client'

import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'
import { useNavBarStore } from '@/app/store/navBarStore'
import { usePathname, useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { Asset } from '@/types/assetsList'
import { useSendStore } from '@/app/store/sendStore'
import { useSellStore } from '@/app/store/sellStore'

const AssetItem = ({ asset }: { asset: Asset; username: string }) => {
  const pathname = usePathname()
  const router = useRouter()
  const isSell = pathname.endsWith('sell')
  const { setTokenName, setTokenSymbol, setTokenAddress } = useSendStore()
  const { setTokenName: setNameSell, setTokenSymbol: setSymbolSell, setTokenAddress: setTokenAddressSell, setTokenImg } = useSellStore()
  const { setActionNavBarMessage } = useNavBarStore()
  const onClick = () => {
    setActionNavBarMessage(`${isSell ? 'Sell' : 'Send'} ${asset.name}`)
    if (isSell) {
      setCookie('sellStep', '2')
      setNameSell(asset.name)
      setSymbolSell(asset.symbol)
      setTokenAddressSell(asset.address)
      setTokenImg(asset.image)
    } else {
      setCookie('sendStep', '2')
      setTokenName(asset.name)
      setTokenSymbol(asset.symbol)
      setTokenAddress(asset.address)
    }
    router.refresh()
  }

  const projectImg = asset.symbol.toLowerCase() === 'sol' ? getTokenImg('sol') : asset.image
  return (
    <div className={style.assetContainer} onClick={onClick}>
      <img className={style.image} src={projectImg} alt="Project image" />
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
