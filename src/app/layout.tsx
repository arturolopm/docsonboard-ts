import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docsonboard',
  description: 'Basically chat with documents'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen font-sans antialiased grainy')}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
