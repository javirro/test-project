import { Project } from '@/types/project'
import { projectEndpoints } from '../endpoints'

export const getProjectByTokenAddress = async (tokenAddress: string): Promise<Project> => {
  const url = projectEndpoints.getProjectByTokenAddress(tokenAddress)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error getting project')
  }
  const { project } = await response.json()
  return project
}
