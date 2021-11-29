import React, { useEffect, useContext } from 'react'
import { AppContext } from 'Providers/AppContext'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

const LoadingComp = () => {
  const { Loading, setLoading, wstatus, status, loadData } =
    useContext(AppContext)

  useEffect(() => {
    Loading ? console.log('loading') : setLoading(false)
    loadData()
  }, [])

  return (
    <Div>
      <FadeIn>
        <div className='textDivu' id='top'>
          <span>PhysioPhoto AI</span>
        </div>
        <MyLoading type='bubbles' color='black' height={80} width={80} />
        <div className='textDivu' id='bottom'>
          <span>{status[wstatus]}</span>
        </div>
      </FadeIn>
    </Div>
  )
}

const Div = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    text-align: center;
    font-size: 17px;
    letter-spacing: 2px;
    font-family: 'Roboto', sans-serif;
  }
  .textDivu {
    overflow: hidden;
    white-space: nowrap;
  }
  #top {
    animation: showup 7s infinite;
    span {
      font-size: 27px;
    }
  }
  #bottom {
    animation: reveal 5s infinite;
    span {
      animation: slidein 5s infinite;
    }
  }

  @keyframes showup {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slidein {
    0% {
      margin-left: -800px;
    }
    20% {
      margin-left: -800px;
    }
    35% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 355px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 355px;
    }
  }
`
const MyLoading = styled(ReactLoading)`
  margin-right: auto;
  margin-left: auto;
`
export default LoadingComp
