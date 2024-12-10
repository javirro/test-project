export interface Asset {
  name: string
  symbol: string
  address: string
  amount: number
  gains: number
  amountInUSD: number
  image: string
}

export interface AssetsListProps {
  assets: Asset[]
  username: string
  solBalance: string
  solPrice: number
  isHandleClick?: boolean
}

export interface assetActivity {
  type: string
  address: string
  amount: number
  gains: number
  symbol: string
}

export interface AssetsListActivityProps {
  assets: assetActivity[]
  username: string
  solBalance: string
  solPrice: number
}
