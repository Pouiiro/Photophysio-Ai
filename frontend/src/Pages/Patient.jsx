import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from 'Providers/AppContext'
import FadeIn from 'react-fade-in'
import MyLink from 'Components/common/buttons/normButton'
import MyLink1 from 'Components/common/buttons/navButton'
import RenderLineChart from 'Components/progress/progress'

const Patient = () => {
  const { setLoading, setWstatus } = useContext(AppContext)
  const [View, setView] = useState('menu')
  return (
    <MyDiv>
      <FadeIn>
        <h1>Physiotherapist Mode</h1>
        {View == 'menu' ? (
          <>
            <MyLink
              onClick={() => {
                setView('progress')
              }}
              to='/'
            >
              View patient progress
            </MyLink>
            <MyLink
              onClick={() => {
                setView('progress')
              }}
              to='/'
            >
              Input exercises
            </MyLink>
            <MyLink
              onClick={() => {
                setWstatus('home')
                setLoading(true)
              }}
              to='/'
            >
              Settings
            </MyLink>
            <MyLink1
              onClick={() => {
                setWstatus('home')
                setLoading(true)
              }}
              to='/'
            >
              Home
            </MyLink1>
          </>
        ) : (
          <>
            <RenderLineChart />
            <MyLink
              onClick={() => {
                setView('menu')
              }}
            >
              Back
            </MyLink>
            <MyLink1
              onClick={() => {
                setWstatus('home')
                setLoading(true)
              }}
              to='/'
            >
              Home
            </MyLink1>
          </>
        )}
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
