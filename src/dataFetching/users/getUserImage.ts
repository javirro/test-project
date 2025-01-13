import { userEndpoints } from '../endpoints'

export const getUserImage = async (username: string) => {
  const response = await fetch(userEndpoints.getUserImage(username), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  })

  if (!response.ok) {
    throw new Error('Error getting user image')
  }
  const data = await response.json()
  return data.image
}

export const getUserCreationDate = async (username: string): Promise<number> => {
  const response = await fetch(userEndpoints.getUserCreationDate(username), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  })

  if (!response.ok) {
    throw new Error('Error getting user creation date')
  }
  const { creationDate }: { creationDate: number } = await response.json()
  return creationDate
}
