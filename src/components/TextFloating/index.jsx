import React, { useEffect } from 'react'


export default function TextFloating({Title, Justify, Width, Direction, Type, Values}) {
  return (
      <div className='flex' style={{justifyContent: Justify}}>
        <div style={{backgroundColor: '#FFFFFF', width: `${Width}%`, display: 'flex'}} className={`${Direction === "column" ? 'flex-col' : 'flex-row'} m-16 md:m-20 mx-5 shadow-2xl rounded-xl justify-center lg:w-screen lg:flex-col ${Justify === 'center' ? 'items-center' : 'items-start'}`}>
          <div className={`${Justify === 'center' ? 'pl-0' : 'lg:pl-12'} pl-5 pt-5 flex items-center`}>
              <h3 className= 'text-black font-bold text-2xl lg:text-3xl'>{Title}:</h3>
          </div>
          { <Type {...Values} /> }
        </div>
      </div>
  )
}
