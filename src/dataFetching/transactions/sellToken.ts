import { User } from '@/types/user'
import { transactionsEndpoints } from '../endpoints'
import { Transaction } from '@/types/transactions'

export const sellToken = async (user: User, token: string, tokenMintAddress: string, tokenId: string, amount: string): Promise<Transaction> => {
  const url = transactionsEndpoints.sellTokens
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
      amount,
    }),
  })
  if (response.status !== 200) {
    throw new Error('Error selling token')
  }
  const { txData } = await response.json()
  return txData
}
