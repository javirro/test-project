const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

export const BASE_URL = `${BACKEND_URL}/api`

export const projectEndpoints = {
  create: `${BASE_URL}/projects/create`, //POST
  getProjects: `${BASE_URL}/projects`, //GET
  getProjectById: (id: string) => `${BASE_URL}/projects/${id}`, //GET
  getProjectLikesById: (id: string) => `${BASE_URL}/project-likes/${id}`, //GET
  getProjectCommentsAmountById: (id: string) => `${BASE_URL}/project-comments-amount/${id}`, //GET
  getProjectCommentsById: (id: string) => `${BASE_URL}/project/comments/${id}`, //GET
  manageProjectLikes: `${BASE_URL}/projects/manage-like`, //POST
  addCommentToProject: `${BASE_URL}/projects/add-comment`, //POST
  deleteCommentFromProject: `${BASE_URL}/projects/comments`, // DELETE
}

export const priceEndpoints = {
  getSolanaPrice: `${BASE_URL}/solana`, //GET
}

export const transactionsEndpoints = {
  getTransactionsByUserAddress: (address: string) => `${BASE_URL}/transactions/${address}`, //GET
  buySellTokens: `${BASE_URL}/transactions/buy-sell`, //POST
}
