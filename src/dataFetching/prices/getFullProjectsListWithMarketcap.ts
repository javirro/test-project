import { ProjectListWithMarketCap } from '@/types/prices'
import { priceEndpoints } from '../endpoints'

export const getFullProjectsListWithMarketcap = async (): Promise<ProjectListWithMarketCap[]> => {
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
