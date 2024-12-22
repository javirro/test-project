import { getComments, getCommentsAmount, getLikeAmount, getProjectLikeByUser } from '@/dataFetching/projects/getLikeAndCommentsAmount'
import { ProjectComments } from '@/types/project'
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

export const useGetProjectComments= (tokenMintAddress: string) => {
  const { data, error, isLoading } = useQuery<ProjectComments[]>({
    queryKey: ['projectComments', tokenMintAddress],
    queryFn: async () => await getComments(tokenMintAddress),
  })
  return { comments: data, isLoading, error }
}


export const useGetProjectLikeByUser = (tokenMintAddress: string, username: string, token: string) => {
  const { data, error, isLoading } = useQuery<boolean>({
    queryKey: ['projectLikeByUser', tokenMintAddress, username, token],
    queryFn: async () => await getProjectLikeByUser(tokenMintAddress, username, token),
  })
  return { userLike: data, userLikeLoading: isLoading, error }
}