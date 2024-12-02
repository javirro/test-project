import { UserBalanceWithProjectInfo } from "@/types/prices"
import { balancesEndpoints } from "../endpoints"

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