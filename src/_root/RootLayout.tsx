import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import React from 'react'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <LeftSidebar />

      <section className='flex flex-1'>

      </section>
    </div>
  )
}

export default RootLayout