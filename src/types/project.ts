export type Project = {
  id: number
  bondingCurveAddress: string
  tokenAddress: string
  tokenName: string
  tokenSymbol: string
  totalSupply: number
  creatorAddress: string
  description: string
  image: string
  video: string
  allowComments: boolean
  tags: string[]
  creationDate: number
  marketCap: string
  likes?: number
  comments?: number
}

export type ProjectForm = Omit<Project, 'id' | 'creationDate' | 'marketCap' | 'likes' | 'comments'| 'tokenAddress' | 'totalSupply' | 'bondingCurveAddress'>


export type ProjectComments = {
  commentId: number
  tokenAddress: string
  userAddress: string
  username: string
  avatar: string
  comment: string
  creationDate: number
}