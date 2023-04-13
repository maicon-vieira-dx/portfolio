import { Box, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'

export default function NavBar({children, xs, sm}) {
  return (
    <Container sx={{ display: { xs: xs, sm: sm } }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/"><img src={logo} /></Link>
        </Box>
          {children}
      </Toolbar>
    </Container>
  )
}
