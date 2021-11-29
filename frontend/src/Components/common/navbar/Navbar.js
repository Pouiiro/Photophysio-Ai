import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from 'Providers/AppContext'
import FadeIn from 'react-fade-in'

const Header = () => {
  const { setLoading, setWstatus } = useContext(AppContext)
  return (
    <FadeIn>
      <NavMy className='navbar navbar-expand-lg navbar-light '>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
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
              <li className='nav-item'>
                <NavLink
                  activeClassName='selected'
                  exact={true}
                  to='/'
                  onClick={() => {
                    setWstatus('home')
                    setLoading(true)
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/Physiotherapist'
                  activeClassName='selected'
                  onClick={() => {
                    setWstatus('physio')
                    setLoading(true)
                  }}
                >
                  Physiotherapist
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/Patient'
                  activeClassName='selected'
                  onClick={() => {
                    setWstatus('patient')
                    setLoading(true)
                  }}
                >
                  Patient
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </NavMy>
    </FadeIn>
  )
}

const NavMy = styled.nav`
  a {
    text-decoration: none;
    color: black;
  }
  .selected {
    font-weight: bold;
  }
  .navbar-brand {
    font-family: 'Roboto', sans-serif;
    font-size: 27px;
    padding: 0px;
    margin: 0px;
    font-weight: 400;
  }
  border-bottom: 1px solid black;
  border-width: thin;
`
export default Header
