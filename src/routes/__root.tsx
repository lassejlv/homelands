import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import '../global.css'
import { LoginResponse } from './login'
import NextjsToploader from 'nextjs-toploader'

export const Route = createRootRoute({
  component: RootComponent,
  loader: async () => {
    let session: LoginResponse | null = null

    const has_session = localStorage.getItem('session')
    if (has_session) {
      session = JSON.parse(has_session)
    }

    return { session }
  },
})

function RootComponent() {
  const { session } = Route.useLoaderData()

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Toaster position='bottom-center' />
      <NextjsToploader color='#fed9c9' height={3} />
      <div className='flex flex-col min-h-screen'>
        <Header session={session} />
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  )
}
