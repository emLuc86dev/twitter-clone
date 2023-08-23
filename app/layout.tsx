import './globals.css'
import type { Metadata } from 'next'
import type { ChildrenProp } from './utilities'

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Generated by Emilio Salvia'
}

export default function RootLayout ({ children }: ChildrenProp) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
