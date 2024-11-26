import { TelegramUser } from '@/types/user'

export const fakeTelegramUserData: TelegramUser = {
  id: 123456789,
  first_name: 'John',
  last_name: 'Doe',
  username: 'johndoe',
  language_code: 'en',
  photo_url: 'https://t.me/i/userpic/320/XamIKZZHSokM5J3IFIfVeiTAv-HoXBZc7t-Ry_CJH4c.svg',
}

export const IS_DEV: boolean = process.env.NEXT_PUBLIC_IS_DEV === 'true'
