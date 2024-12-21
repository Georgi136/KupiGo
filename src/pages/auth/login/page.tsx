'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the login data to your backend
    console.log('Login data:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Вход</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Имейл</Label>
              <Input id="email" name="email" type="email" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="password">Парола</Label>
              <Input id="password" name="password" type="password" required onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Вход</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center">или</div>
          <Button variant="outline" className="w-full">Вход с Google</Button>
          <Button variant="outline" className="w-full">Вход с Facebook</Button>
          <div className="text-center text-sm">
            <Link href="/forgot-password" className="text-purple-600 hover:underline">Забравена парола?</Link>
          </div>
          <div className="text-center text-sm">
            Нямате акаунт? <Link href="/register" className="text-purple-600 hover:underline">Регистрация</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

