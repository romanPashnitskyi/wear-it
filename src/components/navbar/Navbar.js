import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

const style = {
  display: 'block',
  backgroundColor: 'rgb(255, 239, 146)',
  padding: '7px',
  borderRadius: '10px',
  color: '#333333'
}

const Navbar = props => (
  <div className='navbar-wrapper'>
    <ul>
      <li className='weather-link'>
        <NavLink
          exact
          activeStyle={style}
          to='/'>
          <span className='nav_item'>WEATHER</span>
        </NavLink>
      </li>
      <li className='outfit-link'>
        <NavLink
          activeStyle={style}
          to='/outfit'>
          <span className='nav_item'>OUTFIT</span>
        </NavLink>
      </li>
      <li className='forecast-link'>
        <NavLink
          activeStyle={style}
          to='/forecast5days'>
          <span className='nav_item'>5 DAYS</span>
        </NavLink>
      </li>
    </ul>
  </div>
)

export default Navbar
