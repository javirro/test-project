import { Asset } from '@/types/assetsList'
import { UserBalanceWithProjectInfo } from '@/types/user'

export const assets: Asset[] = [
  {
    name: 'Solana',
    symbol: 'SOL',
    address: '0x',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
    image: 'solana',
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    address: '0x1',
    amount: 4980.0,
    gains: 251,
    amountInUSD: 4050,
    image: 'usdt',
  },
]

export const formatAssetsInfo = (assets: UserBalanceWithProjectInfo[]): Asset[] => {
  const formattedAssets: Asset[] = assets.map((asset) => {
    return {
      name: asset.tokenName,
      symbol: asset.tokenSymbol,
      address: asset.tokenMintAddress,
      amount: asset.balance,
      gains: 251,
      amountInUSD: 4050,
      image: asset.image,
    }
  })
  return formattedAssets
}
