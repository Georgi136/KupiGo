import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'KupiGo.bg - Международно Пазаруване',
  description: 'Поръчайте любимите си продукти лесно, доставени до вашата врата',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={`${inter.className} bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

