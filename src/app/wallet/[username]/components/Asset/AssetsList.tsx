import { AssetsListProps } from '@/types/assetsList'
import AssetItem from './AssetItem'

function AssetsList({ assets, username }: AssetsListProps) {
  return (
    <>
      {assets.map((asset, index) => (
        <AssetItem key={index} asset={asset} username={username} />
      ))}
      <div style={{height: '10vh'}}>

      </div>
    </>
  )
}

export default AssetsList
