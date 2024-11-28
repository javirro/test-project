const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

export const BASE_URL = `${BACKEND_URL}/api`

export const projectEndpoints = {
  getAllAddresses: `${BASE_URL}/projects/all/addresses`, //GET
  getProjects: `${BASE_URL}/projects`, //GET
  getProjectByTokenAddress: (tokenAddress: string) => `${BASE_URL}/projects/${tokenAddress}`, //GET
  getProjectLikesByTokenAddress: (tokenAddress: string) => `${BASE_URL}/projects/amount/likes/${tokenAddress}`, //GET
  getProjectCommentsAmountByTokenAddress: (tokenAddress: string) => `${BASE_URL}/projects/amount/comments/${tokenAddress}`, //GET
  getProjectCommentsByTokenAddress: (tokenAddress: string) => `${BASE_URL}/project/comments/${tokenAddress}`, //GET
  create: `${BASE_URL}/projects/create`, //POST
  manageProjectLikes: `${BASE_URL}/projects/likes`, //POST
  addCommentToProject: `${BASE_URL}/projects/comments`, //POST
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

export const userEndpoints = {
  getUsernames: `${BASE_URL}/users/usernames`, //GET
  getUserAddressByUsername: (username: string) => `${BASE_URL}/users/address/${username}`, //GET
  getUserProjectsWatchlistByUsername: (username: string) => `${BASE_URL}/users/watchlist/${username}`, //GET
  getUserSolanaBuyAmountByUsername: (username: string) => `${BASE_URL}/users/solana/buyamount/${username}`, //GET
  createUser: `${BASE_URL}/users/login-create`, //POST
  updateSolanaBuyAmount: `${BASE_URL}/users/solana/buyamount`, //PUT
}