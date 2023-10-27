import NavBar from '@/components/NavBar'
import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'

import 'react-loading-skeleton/dist/skeleton.css'
import 'simplebar-react/dist/simplebar.min.css'

import { Toaster } from '@/components/ui/toaster'
import { constructMetaData } from './../lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetaData()

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          <Toaster />
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
