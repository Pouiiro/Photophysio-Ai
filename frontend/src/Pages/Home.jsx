import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from 'Providers/AppContext'
import FadeIn from 'react-fade-in'
import MyLink from 'Components/common/buttons/navButton'

const Home = () => {
  const { setLoading, setWstatus } = useContext(AppContext)

  return (
    <MyDiv>
      <FadeIn>
        <h1>Please choose</h1>
        <div className='arrow down'></div>
        <MyLink
          onClick={() => {
            setWstatus('physio')
            setLoading(true)
          }}
          to='/Physiotherapist'
        >
          Physiotherapist
        </MyLink>
        <MyLink
          onClick={() => {
            setWstatus('patient')
            setLoading(true)
          }}
          to='/Patient'
        >
          Patient
        </MyLink>
      </FadeIn>
    </MyDiv>
  )
}

const MyDiv = styled.div`
  text-align: center;
  margin-top: 12vh;
  h1 {
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  .arrow {
    border-color: transparent;
    border-style: solid;
    border-width: 0 1em;
    display: block;
    height: 0;
    margin: 2em auto;
    opacity: 0.4;
    text-indent: -9999px;
    transform-origin: 50% 50%;
    width: 0;
    animation: downarrow 0.6s infinite alternate ease-in-out;
    border-top: 1em solid black;
  }
  @keyframes downarrow {
    0% {
      transform: translateY(0);
      opacity: 0.4;
    }
    100% {
      transform: translateY(0.4em);
      opacity: 0.9;
    }
  }
`
export default Home
