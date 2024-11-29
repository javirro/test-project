import { Project } from '@/types/project'
import { projectEndpoints } from '../endpoints'

export const getProjects = async (): Promise<Project[]> => {
  const url = projectEndpoints.getProjects

  const response = await fetch(url, {
    cache: 'no-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Error getting projects: ${response.statusText}`)
  }
  const { projects } = await response.json()
  return projects
}

export const getAllProjectAddresses = async (): Promise<string[]> => {
  const url = projectEndpoints.getAllAddresses
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  })
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
