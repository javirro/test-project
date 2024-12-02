import { Asset } from '@/types/assetsList'
import AssetItem from './AssetItem'

interface AssetsListProps {
  assets: Asset[]
  username: string
  solBalance: string
  solPrice: number
  isHandleClick?: boolean
}

function AssetsList({ assets, username, solBalance, solPrice }: AssetsListProps) {
  const amountInUSD = parseFloat((parseFloat(solBalance) * solPrice).toFixed(2))
  const solanaAsset: Asset = {
    name: 'Solana',
    symbol: 'SOL',
    address: '0x',
    amount: parseFloat(solBalance),
    gains: 12,
    amountInUSD: amountInUSD,
  }
  return (
    <>
      <AssetItem asset={solanaAsset} username={username} />
      {assets.map((asset, index) => (
        <AssetItem key={index} asset={asset} username={username} />
      ))}
    </>
  )
}

export default AssetsList
