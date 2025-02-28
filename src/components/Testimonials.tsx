import React from 'react'

export default function Testimonials() {
  return (
    <section className='w-full'>
      <div className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold text-center mb-4'>Det siger kunderne:</h2>

        <div className='bg-[#f8e1d3] p-8 text-center'>
          <h3 className='text-xl font-semibold mb-4'>Fandt drømmehuset...</h3>

          <blockquote className='text-lg italic max-w-3xl mx-auto'>
            "HomeLands hjalp os med at finde vores drømmehus i 2018. Efter at vi havde prøvet to andre mæglere lykkedes det dem at sælge vores gamle hus på under tre
            måneder. Både service og pris var helt i top"
          </blockquote>

          <p className='mt-4 font-medium'>Anna Hattevej, August 2019</p>
        </div>

        <div className='text-center mt-4'>
          <a href='#' className='text-blue-600 hover:underline'>
            Skriv en anmeldelse
          </a>
        </div>
      </div>
    </section>
  )
}
