import ButtonVoid from 'components/ButtonVoid'
import profile from 'mocks/profile'
import React from 'react'

export default function Timeline({Items}) {
  return (
    <div className='px-3 md:px-12 pt-2 md:pt-7'>
        <ol className="relative border-l border-black px-5">
            {
                Items.map((item, index) => (
                    <li className="mb-2 md:mb-5" key={index}>
                        <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black  "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-black">{item.Date}</time>
                        <h3 className="md:text-lg font-semibold dark:text-black">{item.Locale}</h3>
                        <p className="mb-0 md:mb-4 text-base font-normal  text-black" dangerouslySetInnerHTML={{__html: item.Description}}/>
                    </li>
                ))
            }
        </ol>
        {
            Items.length === 4 ? <ButtonVoid text={profile.TextFloating[1].Button} paste={profile.TextFloating[1].Paste}/> : ''
        }
    </div>
  )
}
