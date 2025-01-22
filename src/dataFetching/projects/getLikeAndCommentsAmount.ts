import { ProjectComments, ProjectWatchList } from '@/types/project'
import { projectEndpoints, userEndpoints } from '../endpoints'

export const getLikeAmount = async (tokenAddress: string): Promise<number> => {
  const url = projectEndpoints.getProjectLikesByTokenAddress(tokenAddress)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error getting like amount')
  }
  const { likes } = await response.json()
  return likes
}

export const getCommentsAmount = async (tokenAddress: string): Promise<number> => {
  const url = projectEndpoints.getProjectCommentsAmountByTokenAddress(tokenAddress)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error getting comments amount')
  }
  const data = await response.json()
  return data.commentsAmount
}

export const getComments = async (tokenAddress: string): Promise<ProjectComments[]> => {
  const url = projectEndpoints.getProjectCommentsByTokenAddress(tokenAddress)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error getting comments')
  }
  const data = await response.json()
  return data.comments
}

export const getProjectLikeByUser = async (tokenAddress: string, username: string, token: string): Promise<boolean> => {
  if (!token || !username) return false
  const url = projectEndpoints.getProjectLikedByUser(tokenAddress, username)
  const options = {
    headers: {
      'content-type': 'application/json',
      authorization: token,
    },
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error getting like by user')
  }
  const { like } = await response.json()
  return like
}

export const getProjectsinWatchlist = async (username: string): Promise<ProjectWatchList[]> => {
  const url = userEndpoints.getUserProjectsWatchlistByUsername(username)
  const response = await fetch(url)
  if (response.ok) {
    const { projects } = await response.json()
    return projects
  } else {
    throw new Error('Error fetching projects in watchlist for user:' + username)
  }
}