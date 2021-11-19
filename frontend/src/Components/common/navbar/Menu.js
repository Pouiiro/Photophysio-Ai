import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink exact={true} to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/test'>Test</NavLink>
      </li>
      <li>
        <NavLink to='/Loading'>Loading</NavLink>
      </li>
    </ul>
  )
}

export default Menu
