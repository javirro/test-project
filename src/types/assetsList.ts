
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