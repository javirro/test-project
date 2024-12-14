import { userEndpoints } from '../endpoints'

export const getBuySolanaAmount = async (username: string, telegramId: number, token: string): Promise<number> => {
  const url = userEndpoints.getUserSolanaBuyAmountByUsername(username)
 
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${telegramId}`,
    },
    cache: 'no-cache',
  })
  if (response.ok) {
    const data = await response.json()
    const solanaAmount: number = data.solanaBuyAmount
    return solanaAmount
  } else {
    throw new Error('Error fetching user solana buy amount')
  }
}

export const updateBuySolanaAmount = async (username: string, telegramId: number, token: string, solanaAmount: number): Promise<void> => {
  const url = userEndpoints.updateSolanaBuyAmount
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${telegramId}`,
    },
    body: JSON.stringify({ username, amount: solanaAmount.toString() }),
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error updating user solana buy amount')
  }
}
