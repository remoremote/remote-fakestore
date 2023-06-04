import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter className='app-container'>
      <Header />
      <Homepage />
      <Footer />
    </BrowserRouter>
  )
}

export default App
