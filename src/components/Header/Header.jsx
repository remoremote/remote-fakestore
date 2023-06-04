import React from 'react'
import './Header.css'
import { BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
        <Link to='/' className='store-title'>Fake Store</Link>
      <div>
        <p className='cart-counter-alert'>1</p>
        <Link to='/checkout' className="icon-notification store-icon">
          <BiCartAlt />
        </Link>
      </div>
    </div>
  )
}


export default Header