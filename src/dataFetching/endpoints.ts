const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

export const BASE_URL = `${BACKEND_URL}/api`

export const projectEndpoints = {
  getAllAddresses: `${BASE_URL}/projects/all/addresses`, //GET
  getProjects: `${BASE_URL}/projects`, //GET
  getProjectByTokenAddress: (tokenAddress: string) => `${BASE_URL}/projects/${tokenAddress}`, //GET
  getProjectLikesByTokenAddress: (tokenAddress: string) => `${BASE_URL}/projects/amount/likes/${tokenAddress}`, //GET
  getProjectLikedByUser: (tokenAddress: string, username: string) => `${BASE_URL}/projects/like-by-user/${tokenAddress}/${username}`, //GET
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
  getFullListWithMarketcap: `${BASE_URL}/marketcap/projects`, //GET
  getProjectMarketCap: (tokenAddress: string) => `${BASE_URL}/marketcap/projects/${tokenAddress}`, //GET
}

export const transactionsEndpoints = {
  getTransactionsByUserAddress: (address: string) => `${BASE_URL}/transactions/${address}`, //GET
  getLastAddressesList: (username: string) => `${BASE_URL}/transactions/last-addresses/${username}`, //GET
  buyTokens: `${BASE_URL}/transactions/buy`, //POST
  sellTokens: `${BASE_URL}/transactions/sell`, //POST
  sendTokens: `${BASE_URL}/transactions/send/tokens`, //POST
  sendSolana: `${BASE_URL}/transactions/send/solana`, //POST
}

export const userEndpoints = {
  getUsernames: `${BASE_URL}/users/usernames`, //GET
  getUserImage: (username: string) => `${BASE_URL}/users/image/${username}`, //GET
  getUserCreationDate: (username: string) => `${BASE_URL}/users/creationdate/${username}`, //GET
  getUserWalletQrCode: (username: string) => `${BASE_URL}/users/walletqr/${username}`, //GET
  getProjectsCreatedByUser: (username: string) => `${BASE_URL}/projects/createdby/${username}`, //GET
  getUserProjectsWatchlistByUsername: (username: string) => `${BASE_URL}/users/watchlist/${username}`, //GET
  getUserSolanaBuyAmountByUsername: (username: string) => `${BASE_URL}/users/solana/buyamount/${username}`, //GET
  // getUserSolanaBuyAmountByUsername: (username: string) => `${BASE_URL}/users/solana/buyamount/johndoe`, //GET
  getUserBalancesProjectList: (username: string) => `${BASE_URL}/users/balances/projects/${username}`, //GET
  createUser: `${BASE_URL}/users/login-create`, //POST
  updateSolanaBuyAmount: `${BASE_URL}/users/solana/buyamount`, //PUT
}

export const balancesEndpoints = {
  getBalancesWithProjectsInfo: (username: string) => `${BASE_URL}/users/balances/projects/${username}`, //GET
}

export const followersEndpoints = {
  handleFollow: `${BASE_URL}/follow`, //PUT
  getFollowers: (username: string) => `${BASE_URL}/followers/${username}`, //GET
  getFollowersCount: (username: string) => `${BASE_URL}/followers/count/${username}`, //GET
  getFollowed: (username: string) => `${BASE_URL}/followed/${username}`, //GET
  getFollowedCount: (username: string) => `${BASE_URL}/followed/count/${username}`, //GET
  checkIfFollowing: (username: string, followedUsername: string) => `${BASE_URL}/follow/${username}/${followedUsername}`, //GET
}
