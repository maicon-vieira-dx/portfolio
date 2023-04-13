import { Copyright, GitHub, LinkedIn } from '@mui/icons-material'
import { Container, IconButton } from '@mui/material'
import React from 'react'
import profile from 'mocks/profile'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{width: '100%', height: '100vh', backgroundColor: '#7C4747', position: 'relative'}} className='shadow-lg shadow-black bottom-12 sm:bottom-0'>
      <Container>
        <div  className='flex justify-center items-center text-center md:text-start flex-col md:flex-row mt-24 md:mt-0'>
        <div className='px-12 md:py-40 py-8'>
          <h4 className=' text-white text-lg lg:text-2xl font-bold pb-5'>{profile.Footer.Titles[0]}</h4>
          <ul>
            <li className='text-white text-md lg:text-xl'><b>Email:</b> <a href={`mailto:${profile.Footer.Email}`}>{profile.Footer.Email}</a></li>
            <li className='text-white text-md lg:text-xl'><b>Telefone:</b> <a href={`tel:${profile.Footer.CellPhone}`}>{profile.Footer.CellPhone}</a></li>
          </ul>
        </div>
        <div className='px-12 md:py-40 py-12'>
          <h4 className=' text-white text-xl lg:text-2xl font-bold pb-5'>{profile.Footer.Titles[1]}</h4>
          <ul>
            <li>
              <Link to="https://github.com/Maicon900">
                <IconButton style={{padding: '0'}}>
                  <GitHub style={{color: '#FFFFFF', marginRight: '10px'}}/>
                  <p className='text-white'>
                     GitHub
                  </p>
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/maicon-vieira-da-costa-61b420217/">
                <IconButton style={{padding: '0'}}>
                <LinkedIn style={{color: '#FFFFFF', marginRight: '10px'}}/>
                <p className='text-white'>
                   LinkedIn
                </p>
                </IconButton>
              </Link>
            </li>
          </ul>
        </div>
        <div className='px-12 md:py-40 py-12'>
          <h4 className=' text-white text-xl lg:text-2xl font-bold pb-5'>{profile.Footer.Titles[2]}</h4>
          <ul>
            <li className='text-white text-md lg:text-xl'><b>Endereço:</b> {profile.Footer.Adress}</li>
          </ul>
        </div>
        </div>
        <div className='ml-5  absolute bottom-14 md:bottom-0'><p className='text-white texl-lg md:text-xl flex items-center'><Copyright className='mr-2'/>Maicon Vieira da Costa</p></div>
      </Container>
    </div>
  )
}
