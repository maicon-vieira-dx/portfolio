import React from 'react'

export default function TableComponent({children, title}) {
  return (
    <>
    <h3 className='text-black text-3xl font-bold my-3 sm:my-12 text-center md:text-start mx-0 md:mr-8'>{title}</h3> 
    <div className={`grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 grid`} >
          {children}
    </div>
    </>
  )
}
