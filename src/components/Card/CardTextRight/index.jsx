import React from 'react'

export default function CardTextRight({Title, Image, Describe}) {
  return (
    <div className={`bg-white rounded flex justify-center items-start shadow-lg`}>
      <div className='py-2 px-4 sm:py-5 sm:px-7 flex flex-row items-center justify-center rounded'>
        <img src={Image} className='w-28 h-24 sm:w-28 sm:h-26 mx-7'/>
        <div>
          <h4 className='sm:text-2xl font-bold text-black'>{Title}</h4>
          <p className='sm:text-xl text-black'>{Describe}</p>
        </div>
      </div>
    </div>
  )
}
