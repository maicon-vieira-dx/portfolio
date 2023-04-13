import React from 'react'

export default function TableComponent({column, children, title}) {
  return (
    <>
    <h3 className='text-black text-3xl font-bold my-3 sm:my-12 text-center md:text-start mr-8'>{title}</h3> 
    <div className={`grid grid-cols-${column[0]} md:grid-cols-${column[1]} xl:grid-cols-${column[2]} gap-4 `}>
        {children}
    </div>
    </>
  )
}
