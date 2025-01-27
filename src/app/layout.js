import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VOLOS - All your chats in one app',
  description: 'VOLOS is a universal chat app. Send and receive messages across 14 different chat networks, all from a single app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
