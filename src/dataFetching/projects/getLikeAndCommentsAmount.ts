import { projectEndpoints } from '../endpoints'

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
  const url = projectEndpoints.getProjectCommentsByTokenAddress(tokenAddress)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error getting comments amount')
  }
  const { commentsAmount } = await response.json()
  return commentsAmount
}
