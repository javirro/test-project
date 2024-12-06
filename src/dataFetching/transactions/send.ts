import { User } from '@/types/user'
import { transactionsEndpoints } from '../endpoints'
import { Transaction } from '@/types/transactions'

export const sendTokens = async (user: User, token: string, tokenMintAddress: string, amount: string, receiverAddress: string): Promise<Transaction> => {
  const url = transactionsEndpoints.sendTokens
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${user.telegramId}`,
    },
    body: JSON.stringify({
      username: user.username,
      tokenMintAddress,
      amount,
      receiverAddress,
    }),
  })
  if (!response.ok) {
    throw new Error('Error sending tokens')
  }
  const { txData }: { txData: Transaction } = await response.json()
  return txData
}


export const sendSolana = async (user: User, token: string, amount: string, receiverAddress: string): Promise<Transaction> => {
  const url = transactionsEndpoints.sendSolana
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${user.telegramId}`,
    },
    body: JSON.stringify({
      username: user.username,
      amount,
      receiverAddress,
    }),
  })
  if (!response.ok) {
    throw new Error('Error sending tokens')
  }
  const { txData }: { txData: Transaction } = await response.json()
  return txData
}


