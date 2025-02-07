import { User } from '@/types/user'
import { transactionsEndpoints } from '../endpoints'
import { Transaction } from '@/types/transactions'

export const buyToken = async (user: User, token: string, tokenMintAddress: string, tokenId: string): Promise<Transaction> => {
  const url = transactionsEndpoints.buyTokens
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${user.telegramId}`,
    },
    body: JSON.stringify({
      tokenAddress: tokenMintAddress,
      tokenId,
      username: user.username,
    }),
  })
  if (response.status !== 200) {
    throw new Error('Error buying token')
  }
  const { txData }: { txData: Transaction } = await response.json()
  return txData
}
