import React from 'react'
import { Search } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { LoginResponse } from '../routes/login'

export default function Header({ session }: { session: LoginResponse | null }) {
  return (
    <header className='bg-black text-white font-odibee-sans'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <div className='bg-brown p-4'>
          <Link to='/' className='text-3xl font-bold'>
            HomeLands
          </Link>
        </div>

        {/* Navigation */}
        <nav className='flex items-center gap-6 text-2xl'>
          <Link to='/' className='hover:underline' activeProps={{ className: 'text-brown' }}>
            Forside
          </Link>
          <Link to='/properties' className='hover:underline' activeProps={{ className: 'text-brown' }}>
            Boliger til salg
          </Link>
          {session ? (
            <>
              <Link to='/profile/$profileId' params={{ profileId: session.username }} className='hover:underline' activeProps={{ className: 'text-brown' }}>
                Profil
              </Link>
              <Link to='/logout' className='hover:underline' activeProps={{ className: 'text-brown' }}>
                Log ud
              </Link>
            </>
          ) : (
            <Link to='/login' className='hover:underline' activeProps={{ className: 'text-brown' }}>
              Login
            </Link>
          )}

          {/* Search */}
          <div className='relative'>
            <input type='text' placeholder='Indtast søgeord' className='py-1 px-3 text-black rounded-sm w-48' />
            <button className='absolute right-1 top-1/2 -translate-y-1/2 text-gray-600'>
              <Search size={18} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
