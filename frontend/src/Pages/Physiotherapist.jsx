import React from 'react'
import ButtonDeclaration from 'Components/common/buttons'
import { Link } from 'react-router-dom'
const Physio = () => {
  return (
    <div>
      <h1>Physiotherapist</h1>
      <Link to='./Patient'>
        <ButtonDeclaration back='Patient' />
      </Link>
      <Link to='/'>
        <ButtonDeclaration back='Home' />
      </Link>
    </div>
  )
}

export default Physio
