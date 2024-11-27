import { useUserStore } from '@/app/store/userStore'
import { getBuySolanaAmount } from '@/dataFetching/users/buySolanaAmount'
import { useQuery } from '@tanstack/react-query'

export const useGetUserSolanaBuyAmount = () => {
  const { user, token } = useUserStore()
  const username = user?.username
  const telegramId = user?.telegramId
  const {
    data: solanaAmount,
    error,
    isLoading,
  } = useQuery<number>({
    queryKey: ['userSolanaBuyAmount', username, telegramId, token],
    queryFn: async () => await getBuySolanaAmount(username as string, telegramId as number, token),
  })
  return { solanaAmount, error, isLoading }
}
