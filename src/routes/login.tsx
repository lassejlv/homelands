import { useMutation } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import ky from 'ky'
import { useState } from 'react'
import { API_URL } from '../lib/api'
import toast from 'react-hot-toast'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:', { username, password })
    loginMutaion.mutate({ username, password })
  }

  const loginMutaion = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      // urlencoded body
      return await ky
        .post(`${API_URL}/token`, {
          body: new URLSearchParams({
            username: data.username,
            password: data.password,
          }),
        })
        .json<{ token: string }>()
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      toast.success('Login successful')
    },
    onError: (err) => {
      toast.error(err.message || 'Login failed')
    },
  })

  return (
    <div className='w-full bg-white min-h-[calc(100vh-64px)]'>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-md mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Login</h1>

          <p className='mb-6 text-gray-700'>Indtast dit brugernavn og adgangskode for at logge ind</p>

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Brugernavn'
                className='w-full p-3 border border-gray-300 rounded'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className='mb-6'>
              <input
                type='password'
                placeholder='Adgangskode'
                className='w-full p-3 border border-gray-300 rounded'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='flex space-x-4'>
              <button type='submit' className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors' disabled={loginMutaion.isPending}>
                {loginMutaion.isPending ? 'Logging in...' : 'Log ind'}
              </button>

              <button type='button' className='bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300 transition-colors'>
                Annuller
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
