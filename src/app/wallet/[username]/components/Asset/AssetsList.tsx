import { Asset, AssetsListProps } from '@/types/assetsList'
import AssetItem from './AssetItem'


function AssetsList({ assets, username, solBalance, solPrice }: AssetsListProps) {
  const amountInUSD = parseFloat((parseFloat(solBalance) * solPrice).toFixed(2))
  const solanaAsset: Asset = {
    name: 'Solana',
    symbol: 'SOL',
    address: '0x',
    image: 'solana',
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
