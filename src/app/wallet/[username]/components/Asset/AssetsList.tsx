'use client'

import style from './asset.module.css'
import { getTokenImg } from '@/images/tokens'
import { useNavBarStore } from '@/app/store/navBarStore'
import { usePathname, useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

interface AssetProps {
  currency: string
  network: string
  amount: number
  gains: number
  amountInUSD: number
}

interface AssetsListProps {
  asset: AssetProps[]
  username: string
  solBalance: string
  solPrice: number
  isHandleClick?: boolean
}

function AssetsList({ asset, username, solBalance, solPrice }: AssetsListProps) {
  const amountInUSD = parseFloat((parseFloat(solBalance) * solPrice).toFixed(2))
  const solanaAsset: AssetProps = {
    currency: 'Solana',
    network: 'SOL',
    amount: parseFloat(solBalance),
    gains: 12,
    amountInUSD: amountInUSD,
  }
  return (
    <>
      <AssetItem asset={solanaAsset} username={username} />
      {asset.map((asset, index) => (
        <AssetItem key={index} asset={asset} username={username} />
      ))}
    </>
  )
}

export default AssetsList

const AssetItem = ({ asset, username }: { asset: AssetProps; username: string }) => {
  const pathname = usePathname()
  const router = useRouter()
  const isSell = pathname.endsWith('sell')
  const redirectPath = `/wallet/${username}/send/address`
  const { setActionNavBarMessage } = useNavBarStore()
  const onClick = () => {
    setActionNavBarMessage(`${isSell ? 'Sell' : 'Send'} ${asset.currency}`)
    if (isSell) {
      setCookie('sellStep', '2')
      router.refresh()
    } else {
      router.push(redirectPath)
    }
  }
  return (
    <div className={style.assetContainer} onClick={onClick}>
      <img className={style.image} src={getTokenImg(asset.network.toLowerCase())} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p className={style.currency}>{asset.currency}</p>
        <p className={style.amount}>
          {asset.amount} <span>{asset.network}</span>
        </p>
      </div>
      <div>
        <p className={style.amountInUsd}>${asset.amountInUSD}</p>
        <p className={style.gains}>${asset.gains}</p>
      </div>
    </div>
  )
}