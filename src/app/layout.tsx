import type { Metadata } from 'next'

import '../styles/globals.css'


export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Portfolio by Kevin Espita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-seasalt">{children}</body>
    </html>
  )
}
