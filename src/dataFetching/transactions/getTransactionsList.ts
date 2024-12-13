import { TransactionData } from '@/types/transactions'
import { User } from '@/types/user'
import { transactionsEndpoints } from '../endpoints'

export const getTransactionsList = async (user: User, token: string): Promise<TransactionData[]> => {
  const url = transactionsEndpoints.getTransactionsByUserAddress(user.username)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${user.telegramId}`,
    },
  })
  if (!response.ok) {
    throw new Error('Error getting transactions')
  }
  const { transactions }: { transactions: TransactionData[] } = await response.json()
  return transactions
}
