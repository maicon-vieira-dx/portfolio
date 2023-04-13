import Home from 'pages/Home'
import Sobre from 'pages/Sobre'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../index.css'
import Projetos from 'pages/Projetos'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
    </BrowserRouter>
  )
}
