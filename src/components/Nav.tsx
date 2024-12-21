import Link from 'next/link'
import { ShoppingBag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">KupiGo.bg</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Начало
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              За нас
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Контакти
            </Link>
            <Link href="/pages/auth/login">
              <Button variant="outline" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Вход</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

