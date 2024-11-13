export type Project = {
  id: number
  bondingCurveAddress: string
  tokenMintAddress: string
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
  website?: string
  twitter?: string
  telegram?: string
  discord?: string
  nsfw: boolean
}

export type ProjectForm = Omit<Project, 'id' | 'creationDate' | 'marketCap' | 'likes' | 'comments'| 'tokenMintAddress' | 'totalSupply' | 'bondingCurveAddress'>


export type ProjectComments = {
  commentId: number
  tokenMintAddress: string
  userAddress: string
  username: string
  avatar: string
  comment: string
  creationDate: number
}