import { AssetsListProps } from '@/types/assetsList'
import AssetItem from './AssetItem'

function AssetsList({ assets, username, solBalance, solPrice }: AssetsListProps) {
  const addSolanaToAssets = [
    {
      name: 'Solana',
      symbol: 'SOL',
      address: 'solana',
      amount: +parseFloat(solBalance)?.toFixed(4),
      gains: 0,
      amountInUSD: +(parseFloat(solBalance) * solPrice)?.toFixed(2),
      image: '/images/solana.png',
    },
    ...assets,
  ]


  return (
    <>
      {addSolanaToAssets.map((asset, index) => (
        <AssetItem key={index} asset={asset} username={username} />
      ))}
      <div style={{ height: '10vh' }}></div>
    </>
  )
}

export default AssetsList
