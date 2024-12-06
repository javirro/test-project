import { User, UserBalanceWithProjectInfo } from '@/types/user'
import { balancesEndpoints, userEndpoints } from '../endpoints'

//*Recommed to use this. It reads info from memory server
export const getUserBalancesProjectList = async (user: User, token: string): Promise<UserBalanceWithProjectInfo[]> => {
  const { username, telegramId } = user
  const url = userEndpoints.getUserBalancesProjectList(username)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${telegramId}`,
    },
  })
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const { balances } = await response.json()
  return balances
}

//! Notice that the function getUserBalancesProjectList is not used in the app. It is recommended to remove it.
export const getUserBalancesWithProjectInfo = async (username: string, token: string, telegramId: number): Promise<UserBalanceWithProjectInfo[]> => {
  const url = balancesEndpoints.getBalancesWithProjectsInfo(username)
  const response = await  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${telegramId}`
    },
    next: {
      revalidate: 30
    }
  })
  if (!response.ok) {
    throw new Error('Error getting user balances')
  }
  const { balances } = await response.json()
  return balances
}