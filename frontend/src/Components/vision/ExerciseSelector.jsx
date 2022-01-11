import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'
import { AppContext } from 'Providers/AppContext'
import MyBtn from 'Components/common/buttons/normButton'
import ExerciseData from 'config/exercises.json'
import Vision from './vision'

const ExerciseSelector = () => {
  const { exercise, SetExercise, setCanvawii, canvawii } =
    useContext(AppContext)
  const [chosen, setChoosen] = useState('Please choose an exercise')
  const [showV, setShowV] = useState(false)
  const size = Object.keys(ExerciseData).length

  const Awo = [...Array(size)].map((el, index) => (
    <MyBtn
      key={index}
      type='button'
      onClick={() => {
        if (showV) {
          setShowV(!showV)
          setTimeout(() => {
            setShowV(true)
          }, 500)
        } else {
          setShowV(true)
        }
        SetExercise(index + 1)
        setChoosen(`Currently doing Exercise ${index + 1}`)
      }}
      className={chosen ? 'clicked' : 'free'}
    >
      Exercise {index + 1}
    </MyBtn>
  ))
  return (
    <MyDiv>
      <FadeIn>
        <h1>{chosen}</h1>
        <div className='exercisesDiv'>{Awo}</div>
        {showV ? <Vision /> : ''}
      </FadeIn>
    </MyDiv>
  )
}

const MyDiv = styled.div`
  text-align: center;
  margin-top: 5vh;
  h1 {
    font-size: 22px;
    margin-bottom: 2vh;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .canvo {
    margin-top: 2vh;
    width: 100vw;
  }
  .exercisesDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 9vw;
    padding-left: 9vw;
    padding-bottom: 1vh;
    a {
      margin-left: auto;
      margin-right: auto;
      width: 30%;
      border-bottom: 2px solid black;
      border-right: 2px solid black;
      :after {
        border-bottom: none;
        border-right: none;
      }
    }
  }
`

export default ExerciseSelector
