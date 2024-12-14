
import { getBuySolanaAmount } from '@/dataFetching/users/buySolanaAmount'
import { useQuery } from '@tanstack/react-query'
import useUser from './useUser'

export const useGetUserSolanaBuyAmount = (refreser: number) => {
  const { user, token } = useUser()
  const username = user?.username
  const telegramId = user?.telegramId
  const {
    data: solanaAmount,
    error,
    isLoading,
    refetch
  } = useQuery<number>({
    queryKey: ['userSolanaBuyAmount', username, telegramId, token, refreser],
    queryFn: async () => await getBuySolanaAmount(username as string, telegramId as number, token),
  })
  return { solanaAmount, error, isLoading, refetch }
}
