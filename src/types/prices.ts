export type Price = {
  price: number
  variation24h: number
}

export interface TokenDataFromBondingCurve {
  marketCap: number
  currentPrice: number
  currentSupply: number
  tokenMintAddress: string
}

export interface ProjectMarketCap extends TokenDataFromBondingCurve {
  image: string
  tokenName: string
  tokenSymbol: string
}
