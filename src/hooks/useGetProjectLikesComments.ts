import { getCommentsAmount, getLikeAmount, getProjectLikeByUser } from '@/dataFetching/projects/getLikeAndCommentsAmount'
import { useQuery } from '@tanstack/react-query'

export const useGetProjectLikes = (tokenMintAddress: string) => {
  const { data, error, isLoading } = useQuery<number>({
    queryKey: ['projectLikes', tokenMintAddress],
    queryFn: async () => await getLikeAmount(tokenMintAddress),
  })
  return { likes: data, isLoading, error }
}

export const useGetProjectCommentsAmount = (tokenMintAddress: string) => {
  const { data, error, isLoading } = useQuery<number>({
    queryKey: ['projectCommentsAmount', tokenMintAddress],
    queryFn: async () => await getCommentsAmount(tokenMintAddress),
  })
  return { commentsAmount: data, isLoading, error }
}


export const useGetProjectLikeByUser = (tokenMintAddress: string, username: string, token: string) => {
  const { data, error, isLoading } = useQuery<boolean>({
    queryKey: ['projectLikeByUser', tokenMintAddress, username, token],
    queryFn: async () => await getProjectLikeByUser(tokenMintAddress, username, token),
  })
  return { userLike: data, userLikeLoading: isLoading, error }
}