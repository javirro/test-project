import { followersEndpoints } from '../endpoints'

export const getFollowers = async (username: string): Promise<string[]> => {
  const url = followersEndpoints.getFollowers(username)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Error fetching followers: ${response.statusText}`)
  }
  const { followers }: { followers: string[] } = await response.json()
  return followers
}

export const getFollowed = async (username: string): Promise<string[]> => {
  const url = followersEndpoints.getFollowed(username)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Error fetching followed: ${response.statusText}`)
  }
  const { followed }: { followed: string[] } = await response.json()
  return followed
}

export const checkIfFollowing = async (username: string, followedUsername: string): Promise<boolean> => {
  const url = followersEndpoints.checkIfFollowing(username, followedUsername)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Error checking if following: ${response.statusText}`)
  }
  const { isFollowing }: { isFollowing: boolean } = await response.json()
  return isFollowing
}
