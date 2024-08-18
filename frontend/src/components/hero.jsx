import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className='bg-purple-100 p-20 w-full flex flex-col items-center justify-center gap-6'>
      <h1 className='text-5xl'>How can we help?</h1>
      <div className='relative w-full flex justify-center'>
        <input
          type="text"
          className='w-[30rem] h-12 p-4 ring-1 ring-black rounded shadow-lg'
          placeholder='Search'
        />
        <FiArrowRight
          size={25}
          className='absolute right-[calc(50%-14rem)] top-1/2 transform -translate-y-1/2 text-black'
        />
      </div>
    </div>
  )
}

export default Hero
