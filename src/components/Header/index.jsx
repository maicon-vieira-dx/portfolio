import React, { useState } from 'react'
import {AppBar, Box, Toolbar, Button, IconButton, Container, MenuItem, Typography, MenuList, Drawer, ListItem, ListItemText, ListItemIcon, List } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { ArrowBack, Construction, GitHub, Home, Menu, Person } from '@mui/icons-material';
import NavBar from 'components/NavBar';
import logo from 'assets/logo.png'

const navList = [
  {
    Title: 'SOBRE',
    Icon: <Person style={{color:'#FFFFFF'}}/>
  },
  {
    Title: 'PROJETOS',
    Icon: <Construction style={{color:'#FFFFFF'}}/>
  }
  ]
export default function Header() {

  const springs = useSpring({
    from: { y: -40, opacity: 0},
    to: { y: 0, opacity: 1}
  })

  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{bgcolor: '#7C4747'}}>
      <NavBar xs="none" sm="block">
                <animated.div style={{display: 'flex',...springs}}>
              <Box>
                {navList.map((item, index) => (
                    <Button key={index} sx={{ color: '#fff' }}>
                      <Link to={`/${item.Title.toLowerCase()}`} className='text-lg'>{item.Title}</Link>
                    </Button>
                ))}
              </Box>
              <Box >
                <Link
                to="https://github.com/Maicon900">
                  <IconButton>
                      <GitHubIcon style={{color: '#FFFFFF'}} />
                  </IconButton>
                </Link>
              </Box>
                </animated.div>
          </NavBar>
        <NavBar xs="block" sm="none">
          <Box>
            <Menu onClick={() => setOpen(true)} sx={{width: '50px', height: '50px'}}/>
            <Drawer open={open} anchor='right' PaperProps={{ sx: { backgroundColor: '#7C4747'}}}>
                <Toolbar>
                  <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }} onClick={() => setOpen(false)}>
                    <ArrowBack sx={{width: '30px', height: '30px', color: '#FFFFFF'}} />
                  </Box>
                </Toolbar>
                <Link to='/'>
                  <ListItem>
                    <ListItemIcon style={{color: '#FFFFFF'}}><Home /></ListItemIcon>
                    <ListItemText style={{color: '#FFFFFF'}}><b>Home</b></ListItemText>
                  </ListItem>
                </Link>
                {
                  navList.map((item, index) => (
                    <Link key={index} to={`/${item.Title.toLowerCase()}`}>
                      <ListItem>
                        <ListItemIcon>{item.Icon}</ListItemIcon>
                        <ListItemText style={{color: '#FFFFFF'}}><b>{item.Title}</b></ListItemText>
                      </ListItem>
                    </Link>
                  ))
                }
                <Link to='https://github.com/Maicon900'>
                  <ListItem>
                    <ListItemIcon style={{color: '#FFFFFF'}}><GitHubIcon /></ListItemIcon>
                    <ListItemText style={{color: '#FFFFFF'}}><b>GITHUB</b></ListItemText>
                  </ListItem>
                </Link>
            </Drawer>
          </Box>
        </NavBar>
        </AppBar>
  )
}
