import React from 'react'
import ButtonDeclaration from 'Components/common/buttons'
import { Link } from 'react-router-dom'
const Test = () => {
  return (
    <div>
      <h1>Patient</h1>
      <Link to='./Physiotherapist'>
        <ButtonDeclaration back='Physiotherapist' />
      </Link>
      <Link to='/'>
        <ButtonDeclaration back='Home' />
      </Link>
    </div>
  )
}
export default Test
