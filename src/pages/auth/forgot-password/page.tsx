'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a password reset request to your backend
    console.log('Password reset requested for:', email)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Забравена парола</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Имейл</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">Изпрати линк за възстановяване</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <Link href="/pages/auth/login" className="text-purple-600 hover:underline">Обратно към вход</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

