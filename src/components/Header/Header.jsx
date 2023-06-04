import React from 'react'
import './Header.css'
import { BiCartAlt } from 'react-icons/bi';

function Header() {
  return (
    <div className="header-container">
        <a href='/' className='store-title'>Fake Store</a>
        <a href='/checkout' className="icon-notification">
        <div>
            <p className='cart-counter-alert'>1</p>
            <button className="store-icon"><BiCartAlt /></button>
        </div>
        </a>
    </div>
  )
}

export default Header