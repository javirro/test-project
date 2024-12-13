import type { Metadata } from 'next'
import { roboto } from '@/components/fonts/fonts'
import styles from './page.module.css'
import Script from 'next/script'
import TapBarWrapper from '@/components/navigation/tapBar/TapBarWrapper'
import NavBarWrapper from '@/components/navigation/navBar/NavBarWrapper'

import './globals.css'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height" />
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive" // Load it before the main app runs
        />
      </head>
      <body className={`${roboto.className} ${styles.page}`}>
        <NavBarWrapper />
        {children}
        <TapBarWrapper />
      </body>
    </html>
  )
}
