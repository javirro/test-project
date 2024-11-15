const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

export const BASE_URL = `${BACKEND_URL}/api`

export const projectEndpoints = {
  create: `${BASE_URL}/projects/create`, //POST
  getProjects: `${BASE_URL}/projects`, //GET
  getProjectByTokenAddress: (tokenAddress: string) => `${BASE_URL}/projects/${tokenAddress}`, //GET
  getProjectLikesByTokenAddress: (tokenAddress: string) => `${BASE_URL}/project-likes/${tokenAddress}`, //GET
  getProjectCommentsAmountByTokenAddress: (tokenAddress: string) => `${BASE_URL}/project-comments-amount/${tokenAddress}`, //GET
  getProjectCommentsByTokenAddress: (tokenAddress: string) => `${BASE_URL}/project/comments/${tokenAddress}`, //GET
  manageProjectLikes: `${BASE_URL}/projects/manage-like`, //POST
  addCommentToProject: `${BASE_URL}/projects/add-comment`, //POST
  deleteCommentFromProject: `${BASE_URL}/projects/comments`, // DELETE
}

export const priceEndpoints = {
  getSolanaPrice: `${BASE_URL}/solana`, //GET
  getSolanaAndTokenPriceByMintAddress: (mintAddress: string) => `${BASE_URL}/price-preview/${mintAddress}`, //GET
}

export const transactionsEndpoints = {
  getTransactionsByUserAddress: (address: string) => `${BASE_URL}/transactions/${address}`, //GET
  buySellTokens: `${BASE_URL}/transactions/buy-sell`, //POST
}
