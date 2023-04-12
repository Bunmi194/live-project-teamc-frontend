import React from 'react'
import '../styles/navbar.styles.css'
import { RoadIcon } from '../assets/RoadIcon'

export const Navbar = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <div className='sign-road-icon'>
          <RoadIcon />
          <h2 className='signup-icon-text'>E-Move</h2>
        </div>
      </div>
      <div className='routes-container'>
        <ul className='routes'>
          <li className='route'>Book a route</li>
          <li className='route'>Payment</li>
          <li className='route'>Wallet</li>
        </ul>
      </div>
      <div className='dropdown'>Hi, Johnson</div>
    </nav>
  )
}
