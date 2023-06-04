import React from 'react'
import './Footer.css'
import { BiDonateHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
        <p>Made with <BiDonateHeart className='love-icon'/> by <a href="/about">remoremote</a></p>
        <a href="/contact">Contact Us</a>
    </div>
  )
}

export default Footer