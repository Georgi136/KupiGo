'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingCart, Truck, Shield } from 'lucide-react'

async function fetchTemuProductData(url: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const productId = url.split('product_id=')[1]?.split('&')[0] || 'unknown'
  
  const products: {[key: string]: any} = {
    '1234': {
      name: 'Смарт часовник Temu Pro',
      price: 89.99,
      description: 'Водоустойчив смарт часовник с множество функции, включително проследяване на здравето и известия.',
      image: '/placeholder.svg?text=Temu+Watch'
    },
    '5678': {
      name: 'Безжични слушалки Temu Sound',
      price: 49.99,
      description: 'Висококачествени безжични слушалки с шумопотискане и дълъг живот на батерията.',
      image: '/placeholder.svg?text=Temu+Earbuds'
    },
    'unknown': {
      name: 'Продукт от Temu',
      price: 99.99,
      description: 'Описание на продукта не е налично.',
      image: '/placeholder.svg?text=Temu+Product'
    }
  }
  
  return products[productId] || products['unknown']
}

export default function ProductPage() {
  const searchParams = useSearchParams()
  const url = searchParams.get('url')
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (url) {
      fetchTemuProductData(url)
        .then(setProduct)
        .catch(err => setError('Грешка при зареждане на продукта. Моля, опитайте отново.'))
    } else {
      setError('Невалиден URL на продукта.')
    }
  }, [url])

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-500">{error}</div>
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Зареждане на продукта...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <CardHeader className="bg-purple-600 text-white">
          <CardTitle className="text-2xl">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <p className="text-3xl font-bold mb-4 text-purple-600">{product.price.toFixed(2)} лв.</p>
              <p className="mb-4 text-gray-700">{product.description}</p>
              <p className="text-sm text-gray-500 mb-4">Продуктът е от Temu</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm">Безплатна доставка</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm">Експресна доставка</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm">Гаранция за качество</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50">
          <Button size="lg" className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
            Добави в количката
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

