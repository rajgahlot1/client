import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Insta from '../Insta'
import Login from '../Login'
import Register from '../Register'

const PathTo = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/client" element={<Insta/>}  />
        <Route path="/client/login" element={<Login/>}  />
        <Route path="/client/register" element={<Register/>}  />
    
    </Routes>
    </BrowserRouter>
  )
}

export default PathTo