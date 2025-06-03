import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Historia de Linux',
  description: 'Trabajo desarrollado para la asignatura de Sistemas Operativos 2'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
