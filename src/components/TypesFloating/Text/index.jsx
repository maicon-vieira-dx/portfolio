import ButtonVoid from 'components/ButtonVoid'
import React from 'react'

export default function Text({Paragraph, Button, Paste}) {
  return (
    <>
        <div className='px-5 lg:px-12 pt-2 lg:pt-5'>
              <p className='text-black' dangerouslySetInnerHTML={{__html: Paragraph}} />
            </div>
        <div className='py-5 pl-5 lg:pl-12'>
            <ButtonVoid text={Button} paste={Paste}/>
        </div>
    </>
  )
}
