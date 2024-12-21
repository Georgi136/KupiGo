'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShoppingBag, Truck, CreditCard } from 'lucide-react'

export default function Home() {
  const [productUrl, setProductUrl] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (productUrl) {
      router.push(`/pages/product?url=${encodeURIComponent(productUrl)}`)
    }
  }

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-800">
            Световно пазаруване на една ръка разстояние
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            KupiGo.bg ви помага да купувате от международни платформи без нужда от кредитна карта.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="url"
              placeholder="Въведете линк към продукта"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              required
              className="flex-grow text-lg py-3"
            />
            <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Поръчай сега
            </Button>
          </div>
        </form>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ShoppingBag className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Огромен избор</h2>
            <p className="text-gray-600">Достъп до милиони продукти от световноизвестни платформи.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Бърза доставка</h2>
            <p className="text-gray-600">Получете вашите поръчки бързо и удобно до вашата врата.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Лесно плащане</h2>
            <p className="text-gray-600">Плащайте при доставка, без нужда от кредитна карта.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

