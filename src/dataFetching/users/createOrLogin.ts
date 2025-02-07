import { TelegramUser, User } from '@/types/user'
import { userEndpoints } from '../endpoints'
import cookiesUserUtils from '@/utils/clientCookiesUtils'

export const createOrLogin = async (telegramUser: TelegramUser): Promise<{ user: User; token: string }> => {
  const { id, username, language_code, photo_url, first_name, last_name } = telegramUser
  const url = userEndpoints.createUser
  const realUsername = username && username !== '' ? username : `${first_name?.toLowerCase()}_${last_name?.toLowerCase()}`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      telegramId: id,
      username: realUsername,
      languageCode: language_code,
      photoUrl: photo_url,
    }),
  }
  const response = await fetch(url, options)
  if (response.ok && response.status === 200) {
    const userData: { user: User; token: string } = await response.json()
    cookiesUserUtils.setTokenInCookie(userData.token)
    cookiesUserUtils.setUserDataInCookie(userData.user)
    return userData
  } else {
    cookiesUserUtils.removeTokenFromCookie()
    cookiesUserUtils.removeUserDataFromCookie()
    throw new Error('Error creating or logging in user')
  }
}
