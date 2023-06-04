import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About/About'
import Details from './pages/Details/Details'
import Checkout from './pages/Checkout/Checkout'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <BrowserRouter className='app-container'>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/details' element={<Details />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      

      <Footer />
    </BrowserRouter>
  )
}

export default App
