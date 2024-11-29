import { getSolanaBalance } from '@/contracts/getBalances'
import { getSolanaPrice } from '@/dataFetching/prices/getPrices'
import { Price } from '@/types/prices'
import { useQuery } from '@tanstack/react-query'

export const useSolanaPrice = () => {
  const { data, isLoading, error } = useQuery<Price>({
    queryKey: ['solanaPrice'],
    queryFn: async () => await getSolanaPrice(),
  })

  return { solanaPrice: data, isLoading, error }
}

export const useSolanaBalance = (userWalletAddress: string) => {
  const { data, isLoading, error } = useQuery<{ lamportSolBalance: string; solBalance: string }>({
    queryKey: ['solanaBalance', userWalletAddress],
    queryFn: async () => await getSolanaBalance(userWalletAddress),
  })
  const solBalance = data?.solBalance
  return { solBalance, isLoading, error }
}
