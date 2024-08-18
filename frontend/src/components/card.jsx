import React from 'react'

const Card = ({title, description}) => {
  return (
    <div className='bg-gray-100 ring-1 ring-gray-400 rounded-xl w-96 h-40'>
      <h3 className='text-gray-900 font-bold text-lg border-b border-gray-400 p-2'>{title}</h3>
      <h4 className='px-4 py-2 text-gray-600'>{description}</h4>
    </div>
  )
}

export default Card;