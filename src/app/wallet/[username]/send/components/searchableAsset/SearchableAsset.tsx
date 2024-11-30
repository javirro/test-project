'use client'

import { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import AssetsList from '../../../components/Asset/AssetsList'
import { Asset } from '@/types/assetsList'

interface SearchableAssetProps {
  assets: Asset[]
  username?: string
  solanaPrice: number
}

function SearchableAsset({ assets, username, solanaPrice }: SearchableAssetProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredAssets = assets.filter((asset) => asset?.name?.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <AssetsList asset={filteredAssets} isHandleClick={true} solBalance={'0'} solPrice={solanaPrice} username={username as string} />
    </>
  )
}

export default SearchableAsset
