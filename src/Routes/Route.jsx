import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Insta from '../Insta'

const PathTo = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/client" element={<Insta/>}  />
    </Routes>
    </BrowserRouter>
  )
}

export default PathTo