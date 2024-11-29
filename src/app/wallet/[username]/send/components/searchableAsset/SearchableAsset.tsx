'use client'

import { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import AssetsList from '../../../components/Asset/AssetsList'

interface AssetProps {
  currency: string
  network: string
  amount: number
  gains: number
  amountInUSD: number
}

interface SearchableAssetProps {
  assets: AssetProps[]
  username?: string
}

function SearchableAsset({ assets, username }: SearchableAssetProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredAssets = assets.filter((asset) => asset.currency.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <AssetsList asset={filteredAssets} isHandleClick={true} username={username} />
    </>
  )
}

export default SearchableAsset
