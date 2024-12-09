import { assetActivity, AssetsListActivityProps } from '@/types/assetsList'
import AssetItemActivity from './AssetItemActivity'

function AssetsListActivity({ assets, solBalance }: AssetsListActivityProps) {
  const solanaAsset: assetActivity = {
    type: 'receive',
    symbol: 'SOL',
    address: '9383h...uwi92',
    amount: parseFloat(solBalance),
    gains: 12,
  }
  return (
    <>
      <AssetItemActivity asset={solanaAsset} />
      {assets.map((asset, index) => (
        <AssetItemActivity key={index} asset={asset} />
      ))}
    </>
  )
}

export default AssetsListActivity
