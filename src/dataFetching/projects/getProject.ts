import { Project } from '@/types/project'
import { projectEndpoints } from '../endpoints'

export const getAllProjectAddresses = async (): Promise<string[]> => {
  const url = projectEndpoints.getAllAddresses
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`Error getting project addresses: ${response.statusText}`)
  }
  const { addresses } = await response.json()
  return addresses
}

export const getProjectByTokenAddress = async (tokenAddress: string): Promise<Project> => {
  const url = projectEndpoints.getProjectByTokenAddress(tokenAddress)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`Error getting project with mintAddress ${tokenAddress}: ${response.statusText}`)
    }
    const { project } = await response.json()
    return project
  } catch (error) {
    console.error(`Error getting project with mintAddress ${tokenAddress}`, error)
    throw error
  }
}
