export interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username: string
  language_code: string
  photo_url: string
}

export type User = {
  id: number
  telegramId: number
  username: string
  image: string
  languageCode: string
  address: string
  privateKey?: string
  solanaBuyAmount: string
  deviceAuthentication: boolean
  showWalletShortcuts: boolean
  creationDate: number
}

export type UserBalanceWithProjectInfo = {
  username: string
  tokenMintAddress: string
  balance: number
  tokenName: string
  tokenSymbol: string
  image: string
}
