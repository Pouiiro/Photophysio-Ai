import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = styled.button`
  color: black;
  background: white;
  border: solid 5px black;
`

const Camera = () => {
  alert('It works')
}

const ButtonDeclaration = (props) => {
  console.log(props)
  return (
    <>
      <button className='btn btn-primary' style={{ background: 'red' }}>
        {props.back}
      </button>
    </>
  )
}
ButtonDeclaration.propTypes = {
  back: PropTypes.string.isRequired,
}
export default ButtonDeclaration
