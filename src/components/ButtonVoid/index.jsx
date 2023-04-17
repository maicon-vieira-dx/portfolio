import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import style from './ButtonVoid.module.css'

export default function ButtonVoid({text, paste}) {
  return (
        <div className={style.buttonVoid}>
          <a href={`${paste}`} download>
              <div className='flex flex-row'>
                <p>{text}</p>
                <div className={style.iconArrow}>
                  <ArrowForward />
                </div>
              </div>
          </a>
        </div>
  )
}
