import { Facebook, X } from 'lucide-react'

import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4'>HomeLands</h2>
            <address className='not-italic'>
              <p>Øster Uttrupvej 5</p>
              <p>9000 Aalborg</p>
              <p className='mt-2'>Email: info@homelands.dk</p>
              <p>Telefon: +45 1122 3344</p>
            </address>
          </div>

          <div className='flex gap-4 mt-6 md:mt-0'>
            <a href='#' className='text-white hover:text-gray-300'>
              <X size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-300'>
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
