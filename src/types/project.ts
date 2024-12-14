export type Project = {
  id: number
  bondingCurveAddress: string
  tokenMintAddress: string
  tokenName: string
  tokenSymbol: string
  totalSupply: number
  tokenId: string
  creatorUsername: string
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

export type ProjectForm = Omit<Project, 'id' | 'creationDate' | 'marketCap' | 'likes' | 'comments'| 'tokenMintAddress' | 'tokenId' | 'totalSupply' | 'bondingCurveAddress'>


export type ProjectComments = {
  commentId: number
  tokenMintAddress: string
  username: string
  userImage: string
  comment: string
  creationDate: number
}