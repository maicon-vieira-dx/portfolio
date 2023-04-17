import Home from 'pages/Home'
import Sobre from 'pages/Sobre'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import '../index.css'
import Projetos from 'pages/Projetos'
import { AppBar } from '@mui/material'
import Header from 'components/Header'

export default function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
    </HashRouter>
  )
}
