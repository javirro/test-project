import { getCommentsAmount, getLikeAmount } from '@/dataFetching/projects/getLikeAndCommentsAmount'
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


