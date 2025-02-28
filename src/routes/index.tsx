import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { GetHomes, GetStaff } from '../lib/api'
import Testimonials from '../components/Testimonials'
import Team from '../components/Staff'
import Footer from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: async () => {
    const homes = await GetHomes()
    const staff = await GetStaff()

    return { homes, staff }
  },
})

function HomeComponent() {
  const { homes, staff } = Route.useLoaderData()

  return (
    <>
      <div className='relative h-[500px] w-full overflow-hidden'>
        <img
          src='https://eu-east.storage.file0.io/u/1d1130b3-1a62-47fc-9b20-6f401e2b3f6f/uploads/01954c02-e65a-7000-84cb-ddad00a60090.jpg'
          alt='Vejle Wave buildings'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='container mx-auto px-4 py-8 -mt-16 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {homes.map((property) => (
            <div key={property.id} className='bg-white rounded-md shadow-lg overflow-hidden'>
              <div className='h-48 overflow-hidden'>
                <img src={property.images[0].filename.large} alt={property.address} className='w-full h-full object-cover' />
              </div>

              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{property.address}</h3>
                <p className='text-gray-700'>{property.city}</p>
                <p className='text-gray-700'>{property.type}</p>

                <div className='flex items-center mt-4'>
                  <div className='bg-green-500 text-white font-bold w-8 h-8 flex items-center justify-center'>{property.energy_label_name}</div>
                  <div className='ml-4'>
                    <span>
                      {property.num_rooms} værelser, {property.floor_space} m²
                    </span>
                  </div>
                </div>

                <div className='mt-4 text-right'>
                  <span className='text-lg font-bold'>{property.price} DKK</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />

      <Team members={staff} />

      <Footer />
    </>
  )
}
