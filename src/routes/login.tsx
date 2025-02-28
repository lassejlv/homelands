import { useMutation } from '@tanstack/react-query'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { API_URL } from '../lib/api'
import toast from 'react-hot-toast'
import ky from 'ky'

export interface LoginResponse {
  access_token: string
  expires_in: number
  status: string
  user: { firstname: string; lastname: string; email: string; class: string }
  user_id: number
  username: string
}

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    console.log('Login attempt with:', { username, password })
    loginMutaion.mutate({ username, password })
  }

  const loginMutaion = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      return await ky
        .post(`${API_URL}/token`, {
          body: new URLSearchParams({
            username: data.username,
            password: data.password,
          }),
        })
        .json<LoginResponse>()
    },
    onSuccess: (data) => {
      router.invalidate()
      router.navigate({ to: '/profile/$profileId', params: { profileId: data.user_id.toString() } })
      localStorage.setItem('session', JSON.stringify(data))
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
              <input type='text' placeholder='Brugernavn' className='w-full p-3 border border-gray-300 rounded' name='username' required />
            </div>

            <div className='mb-6'>
              <input type='password' placeholder='Adgangskode' className='w-full p-3 border border-gray-300 rounded' name='password' required />
            </div>

            <div className='flex space-x-4'>
              <button
                type='submit'
                className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50'
                disabled={loginMutaion.isPending}
              >
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
