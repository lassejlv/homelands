import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import '../global.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Toaster position='bottom-center' />
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  )
}
