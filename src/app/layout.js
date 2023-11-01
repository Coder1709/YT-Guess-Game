
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yt-Guess-Game',
  description: 'Its an app in which we have to guess which song is popular',
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    
  )
}
