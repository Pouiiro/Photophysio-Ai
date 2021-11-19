import React from 'react'
import ButtonDeclaration from 'Components/common/buttons'
import { Link } from 'react-router-dom'
import PageState from 'Components/common/useState'
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to='./Patient'>
        <ButtonDeclaration back='Patient' />
      </Link>
      <Link to='./Physiotherapist'>
        <ButtonDeclaration back='Physiotherapist' />
      </Link>
      <Link to='./LoadingPage'>
        <ButtonDeclaration back='LoadingPage' />
      </Link>
      <PageState />
    </div>
  )
}

export default Home
