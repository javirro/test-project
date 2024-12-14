import { User } from '@/types/user'
import { transactionsEndpoints } from '../endpoints'

export const buyToken = async (user: User, token: string, tokenMintAddress: string, tokenId: string) => {
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
  const result = await response.json()
  return result
}
