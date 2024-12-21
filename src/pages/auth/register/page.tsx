'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the registration data to your backend
    console.log('Registration data:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Регистрация</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Имейл</Label>
              <Input id="email" name="email" type="email" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" name="phone" type="tel" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="password">Парола</Label>
              <Input id="password" name="password" type="password" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Потвърди парола</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" required onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Регистрация</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center">или</div>
          <Button variant="outline" className="w-full">Регистрация с Google</Button>
          <Button variant="outline" className="w-full">Регистрация с Facebook</Button>
          <div className="text-center text-sm">
            Вече имате акаунт? <Link href="/pages/auth/login" className="text-purple-600 hover:underline">Вход</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}</continuation_point>

```tsx file="app/pages/auth/login/page.tsx"
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
            <Link href="/pages/auth/forgot-password" className="text-purple-600 hover:underline">Забравена парола?</Link>
          </div>
          <div className="text-center text-sm">
            Нямате акаунт? <Link href="/pages/auth/register" className="text-purple-600 hover:underline">Регистрация</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

