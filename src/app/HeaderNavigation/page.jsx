import { Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='z-10'>
      <nav className='w-screen h-20 border-b-2 border-gray-300'>
        <div className='flex justify-end items-center pt-4 pr-6 gap-6'>
          {/* setting icon */}
          <Settings />
          {/* profile image   */}
          <Image src="/images/profileImage.png" className='h-10 w-10 rounded-full' alt="profile image" height={20} width={50} />
        </div>
      </nav>
    </div>
  )
}

export default page
