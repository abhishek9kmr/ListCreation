import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import NewList from './Screen/NewList'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/NewList' element={<NewList/>}/>
    </Routes>
    </BrowserRouter>
  )
}
