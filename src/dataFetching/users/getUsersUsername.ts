import { userEndpoints } from '../endpoints'

export const getUsersUsernames = async (): Promise<string[]> => {
  const url = userEndpoints.getUsernames
  const response = await fetch(url, {
    cache: 'no-cache',
    next: {
      revalidate: 30,
    },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    console.log(response)
    throw new Error('Failed to fetch usernames')
  }
  const data = await response.json()
  return data.usernames
}
