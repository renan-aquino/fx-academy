import { Header } from '@/components/Sections/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Sections/Footer/Footer'

export const metadata: Metadata = {
  title: 'FX Academy',
  description: 'A video editing school with hands-on projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
