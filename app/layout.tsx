import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'SREE VARAAHA - Prospects & Inventory',
  description: 'Manage prospects and inventory for community sales',
  manifest: '/manifest.json',
  themeColor: '#277eff',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SREE VARAAHA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>
        <ThemeProvider>
          <div className="app-root">
            <Sidebar />
            <div className="main-area">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

