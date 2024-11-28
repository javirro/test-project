import { TelegramUser, User } from '@/types/user'
import { userEndpoints } from '../endpoints'
import localStorageUtils from '@/utils/localstorageUtils'

export const createOrLogin = async (telegramUser: TelegramUser): Promise<{ user: User; token: string }> => {
  const { id, username, language_code, photo_url } = telegramUser
  const url = userEndpoints.createUser
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      telegramId: id,
      username,
      languageCode: language_code,
      photoUrl: photo_url,
    }),
  }
  const response = await fetch(url, options)
  if (response.ok && response.status === 200) {
    const userData: { user: User; token: string } = await response.json()
    localStorageUtils.setTokenLocalStorage(userData.token)
    localStorageUtils.setUserLocalStorage(userData.user)
    return userData
  } else {
    localStorageUtils.removeTokenLocalStorage()
    localStorageUtils.removeUserLocalStorage()
    throw new Error('Error creating or logging in user')
  }
}
