import React from 'react'
import imgOne from '../assets/borabora.jpg'
import imgTwo from '../assets/borabora2.jpg'
import imgThree from '../assets/maldives.jpg'
import imgFour from '../assets/maldives2.jpg'
import imgFive from '../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div className='p-8 text-center max-w-[1240px] mx-auto py-16 px-4'>
      <div>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
      </div>
      <div className='grid grid-rows-none md:grid-cols-5 py-4   gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={imgOne} alt="" />
          <img className='w-full h-full object-cover' src={imgTwo} alt="" />
          <img className='w-full h-full object-cover' src={imgThree} alt="" />
          <img className='w-full h-full object-cover' src={imgFour} alt="" />
          <img className='w-full h-full object-cover' src={imgFive} alt="" />
      </div>
      
    </div>
  )
}

export default Destinations