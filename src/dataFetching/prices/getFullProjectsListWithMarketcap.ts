import { ProjectMarketCap, TokenDataFromBondingCurve } from '@/types/prices'
import { priceEndpoints } from '../endpoints'

export const getFullProjectsListWithMarketcap = async (): Promise<ProjectMarketCap[]> => {
  const url = priceEndpoints.getFullListWithMarketcap
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Error fetching projects with market cap: ${response.statusText}`)
  }
  const { projectsDataWithMarketCap } = await response.json()
  return projectsDataWithMarketCap
}

export const getProjectMarketcap = async (tokenAddress: string): Promise<{ position: number; marketCapData: TokenDataFromBondingCurve }> => {
  const url = priceEndpoints.getProjectMarketCap(tokenAddress)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Error fetching project market cap: ${response.statusText}`)
  }
  const result = await response.json()
  const position: number = result?.position
  const marketCapData: TokenDataFromBondingCurve = result?.project
  return { marketCapData, position }
}
