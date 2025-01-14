import { userEndpoints } from '../endpoints'

export const getProjectsCreatedByUser = async (username: string): Promise<{ image: string; tokenMintAddress: string; tokenName: string }[]> => {
  const url = userEndpoints.getProjectsCreatedByUser(username)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) {
    const { projects } = await response.json()
    return projects
  } else {
    throw new Error('Error fetching projects created by user')
  }
}
