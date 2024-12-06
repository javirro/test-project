import { Project } from './project'

export type TransactionType = 'BUY' | 'SELL' | 'SEND' | 'RECEIVE'


export type Transaction = {
  tokenMintAddress: string
  userSourceAddress: string
  destinationUserAddress?: string
  transactionType: TransactionType
  solanaAmount?: number
  solanaPriceUsd: string
  tokenAmount: number
  tokenPriceUsd: string
  transactionHash: string
}

export type TransactionData = Transaction & Pick<Project, 'tokenName' | 'tokenSymbol' | 'image'> & { transactionDate: number }
