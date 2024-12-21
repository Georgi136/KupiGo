'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePaymentMethodChange = (value: string) => {
    setFormData({ ...formData, paymentMethod: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile data to your backend
    console.log('Updated profile data:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Профил</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Име</Label>
              <Input id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Имейл</Label>
              <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="address">Адрес за доставка</Label>
              <Input id="address" name="address" required value={formData.address} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="paymentMethod">Предпочитан метод на плащане</Label>
              <Select onValueChange={handlePaymentMethodChange} defaultValue={formData.paymentMethod}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Изберете метод на плащане" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Наложен платеж</SelectItem>
                  <SelectItem value="card">Кредитна/Дебитна карта</SelectItem>
                  <SelectItem value="bank">Банков превод</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Запази промените</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

