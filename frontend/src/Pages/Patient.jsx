import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from 'Providers/AppContext'
import FadeIn from 'react-fade-in'
import MyLink from 'Components/common/buttons/navButton'

const Patient = () => {
  const { setLoading, setWstatus } = useContext(AppContext)
  return (
    <MyDiv>
      <FadeIn>
        <h1>Patient Mode</h1>
        <MyLink
          onClick={() => {
            setWstatus('home')
            setLoading(true)
          }}
          to='/'
        >
          Home
        </MyLink>
      </FadeIn>
    </MyDiv>
  )
}

const MyDiv = styled.div`
  text-align: center;
  margin-top: 8vh;
  h1 {
    font-size: 22px;
    margin-bottom: 15vh;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

export default Patient
