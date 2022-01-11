import React, { useContext } from 'react'
import styled from 'styled-components'
import ExerciseSelector from 'Components/vision/ExerciseSelector'
import { AppContext } from 'Providers/AppContext'
import FadeIn from 'react-fade-in'
import MyLink from 'Components/common/buttons/navButton'

const Physio = () => {
  const { setLoading, setWstatus } = useContext(AppContext)

  return (
    <>
      <MyDiv>
        <FadeIn>
          <ExerciseSelector />
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
    </>
  )
}
const MyDiv = styled.div`
  text-align: center;
  margin-top: 5vh;
  a {
    margin-top: 5vh;
  }
`
export default Physio
