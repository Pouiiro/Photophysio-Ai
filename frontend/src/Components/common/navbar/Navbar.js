import ReactDom from 'react-dom'
import React, { Component } from 'react'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
function HeaderArtur() {
  return (
    <Navbar>
      <Menu />
    </Navbar>
  )
}
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            PhysioPhotoAI
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <NavLink to='/'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink to='./Physiotherapist'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Physiotherapist
                  </a>
                </li>
              </NavLink>
              <NavLink to='./Patient'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Patient
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default HeaderArtur
