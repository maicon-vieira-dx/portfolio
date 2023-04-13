import React from 'react'

export default function CardImage({image}) {
  return (
    <div className='w-42 h-28 sm:w-60 sm:h-28 lg:h-44 bg-white rounded flex justify-center items-center shadow-md shadow-black hover:shadow-lg hover:shadow-black'>
        <img src={image} className='px-10 h-1/3 lg:h-auto' />
    </div>
  )
}
