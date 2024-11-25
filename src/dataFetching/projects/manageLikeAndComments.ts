import { projectEndpoints } from '../endpoints'

// Add like is the same that add to watchlist
export const manageLike = async (tokenAddress: string, userAddress: string): Promise<boolean> => {
  const url = projectEndpoints.manageProjectLikes
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tokenAddress, userAddress }),
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error managing like')
  }
  const res: { tokenAddress: string; like: boolean } = await response.json()
  return res.like
}

export const addComment = async (tokenAddress: string, userAddress: string, comment: string): Promise<void> => {
  const url = projectEndpoints.addCommentToProject
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tokenAddress, userAddress, comment }),
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error adding comment')
  }
}

export const deleteComment = async (tokenAddress: string, userAddress: string, commentId: string): Promise<void> => {
  const url = projectEndpoints.deleteCommentFromProject
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tokenAddress, userAddress, commentId }),
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error deleting comment')
  }
}