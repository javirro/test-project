import { userEndpoints } from '../endpoints'

// Returns the qr code of the user's wallet in base64 format
export const getUserWalletQr = async (username: string, token: string, telegramId: number): Promise<string> => {
  const url = userEndpoints.getUserWalletQrCode(username)

  const response = await fetch(url, {
    cache: 'force-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
      'telegram-Id': telegramId.toString(),
    },
  })
  if (!response.ok) {
    console.error("Error fetching user wallet qr")
    throw new Error('Failed to fetch user wallet qr')
  }
  const { walletQr } = await response.json()

  return walletQr
}
