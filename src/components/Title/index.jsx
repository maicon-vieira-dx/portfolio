import React from 'react'
import profile from 'mocks/profile'
import style from './Title.module.scss'
import { useSpring, animated } from 'react-spring'

export default function Title() {

  const springs = useSpring({
    from: {x: -250, opacity: 0},
    to: {x: 0, opacity: 1}
  })

  return (
    <div className='h-screen'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between h-screen'>
          <animated.div style={{...springs}} className='lg:pl-20 py-28 lg:py-40 flex justify-center items-center flex-col w-screen'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold' style={{color: '#7C4747'}}>{profile.Title}</h1>
            <h3 className='text-xl' style={{color: '#7C4747'}}><i>{profile.Subtitle}</i></h3>
          </animated.div>
          <div style={{backgroundColor: '#7C4747'}} className='flex lg:justify-center lg:items-center lg:w-96  h-1/2 lg:h-screen justify-center w-screen relative'>
            <animated.picture style={{...springs}} className={style.imgProfile}>
              <img src={profile.Image}  className='relative z-10'/>
            </animated.picture>
          </div>
        </div>
    </div>
  )
}
