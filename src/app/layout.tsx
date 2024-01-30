import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { TasksProvider } from '@/contexts/TasksContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home - Halo todo',
  description: 'A website for you to organize your to do tasks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <TasksProvider>
        <body className={inter.className}>{children}</body>
      </TasksProvider>
    </html>
  )
}
