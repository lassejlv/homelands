import React from 'react'
import { StaffMember } from '../lib/api'

export default function Team({ members }: { members: StaffMember[] }) {
  return (
    <section className='w-full py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl font-bold text-center mb-8'>Mød vores ansatte</h2>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {members.map((member) => (
            <div key={member.id} className='border border-gray-200'>
              <div className='h-64 overflow-hidden'>
                <img src={member.image} alt={member.firstname} className='w-full h-full object-cover' />
              </div>
              <div className='p-4'>
                <h3 className='font-bold'>{member.firstname}</h3>
                <p className='text-sm'>{member.lastname}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
