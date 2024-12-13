import { TransactionType } from "./transactions"

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

export interface TxAssetActivity {
  type: TransactionType
  address: string
  amount: number
  symbol: string
  name: string
  projectImage: string
}
