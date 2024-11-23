import type { Metadata } from 'next'
import localFont from 'next/font/local'
import TapBarWrapper from '@/components/navigation/tapBar/TapBarWrapper'
import NavBarWrapper from '@/components/navigation/navBar/NavBarWrapper'
import styles from './page.module.css'
import './globals.css'
import TelegramAuth from '@/components/Telegram/TelegramConnection'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'TikToken',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.page}`}>
        <TelegramAuth />
        <NavBarWrapper />
        {children}
        <TapBarWrapper />
      </body>
    </html>
  )
}
