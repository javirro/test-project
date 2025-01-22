'use server'

import { followersEndpoints } from '../endpoints'

export const handleFollow = async (username: string|undefined, followed: string, token: string, telegramId: number|undefined): Promise<void> => {
  if (!token || !username) return

  const url = followersEndpoints.handleFollow
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-id': `${telegramId}`,
    },
    body: JSON.stringify({
      username,
      followed,
    }),
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`Error handle follow user: ${response.statusText}`)
  }
}
