'use client'

import { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import AssetsList from '../../../components/Asset/AssetsList'
import { Asset } from '@/types/assetsList'

interface SearchableAssetProps {
  assets: Asset[]
  username?: string
}

function SearchableAsset({ assets, username }: SearchableAssetProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredAssets = assets.filter((asset) => asset.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <AssetsList asset={filteredAssets} isHandleClick={true} solBalance={"0"} solPrice={250} username={username as string} />
    </>
  )
}

export default SearchableAsset
