import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const myFunction = () => {
  return alert('Hello World!')
}
const PageState = () => {
  const [Loginstate, setLoginstate] = useState(0)
  const handleClick = () => {
    setLoginstate(Loginstate + 1)
    if (Loginstate === 1) {
      myFunction()
    } else {
      setTimeout(myFunction, 2000)
      setLoginstate(0)
    }
  }

  return (
    <>
      <h1>{Loginstate}</h1>
      <button className='btn btn-primary' onClick={handleClick}>
        CLICK
      </button>
    </>
  )
}

export default PageState
