import React from 'react'
import Spinner from './Spinner'

export default function LoadigPage() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Spinner size={50} />
    </div>
  )
}
