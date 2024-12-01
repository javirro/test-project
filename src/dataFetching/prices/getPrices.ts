import { Price } from '@/types/prices'
import { priceEndpoints } from '../endpoints'

export const getSolanaPrice = async (): Promise<Price> => {
  const url = priceEndpoints.getSolanaPrice
  const response = await fetch(url,{
    cache: 'no-cache',
  })
  if (!response.ok) {
    throw new Error('Error getting Solana price')
  }
  const { price, variation24h }: Price = await response.json()
  return { price, variation24h }
}

export const getSolanaAndTokenPrice = async (tokenMintAddress: string): Promise<{ solanaPrice: number; tokenPrice: number }> => {
  const url = priceEndpoints.getSolanaAndTokenPriceByMintAddress(tokenMintAddress)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error getting Solana price')
  }
  const { solanaPrice, tokenPrice } = await response.json()
  return { solanaPrice, tokenPrice }
}
