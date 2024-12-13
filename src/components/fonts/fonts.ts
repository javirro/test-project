import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'], // Choose the character subsets you need
  weight: ['100', '300', '400', '500', '700', '900'], // Specify the font weights you need,
  style: ['normal', 'italic'],
})
