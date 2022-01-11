import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'
import MyBtn from 'Components/common/buttons/normButton'
import { AppContext } from 'Providers/AppContext'
import ExerciseData from 'config/exercises.json'

let model, webcam, ctx, labelContainer, maxPredictions

const Vision = () => {
  const { exercise, SetExercise } = useContext(AppContext)
  const urlNum = `exercise${exercise}`
  const URL = ExerciseData[urlNum]

  function largest(num1, num2, num3) {
    let neutral = 'neutral'
    let left = 'left'
    let right = 'right'

    if (num1 > num2 && num1 > num3) {
      // console.log("neutral -is greatest");
      return neutral
    } else if (num2 > num1 && num2 > num3) {
      // console.log("left -is greatest");
      return left
    } else if (num3 > num1 && num3 > num1) {
      // console.log("right is greatest");
      return right
    }
  }

  const initu = async () => {
    const modelURL = URL + 'model.json'
    const metadataURL = URL + 'metadata.json'
    model = await window.tmPose.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()
    const width = 400
    const height = 400
    const flip = true
    webcam = new window.tmPose.Webcam(width, height, flip)
    await webcam.setup()
    await webcam.play()
    window.requestAnimationFrame(loop)

    const canvas = document.getElementById('canvas')
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext('2d')
    labelContainer = document.getElementById('label-container')
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'))
    }
  }

  async function loop(timestamp) {
    webcam.update()
    await predict()
    window.requestAnimationFrame(loop)
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas)
    const prediction = await model.predict(posenetOutput)

    if (pose) {
      document.getElementById('tensorflow').style.display = 'block'
      document.getElementById('info').style.display = 'block'
    }

    let neutral_probablity = prediction[0].probability
    let left_probablity = prediction[1].probability
    let right_probablity = prediction[2].probability

    let topResult = await largest(
      neutral_probablity,
      left_probablity,
      right_probablity
    )
    const neutral = document.querySelector('#neutral')
    const left = document.querySelector('#left')
    const right = document.querySelector('#right')

    if (neutral) {
      if (topResult === 'neutral') {
        neutral.style.background = '#A5D6A7'
        neutral.style.color = '#263238'
        left.style.background = 'rgba(255, 255, 255, 0.08)'
        left.style.color = '#E0E0E0'
        right.style.background = 'rgba(255, 255, 255, 0.08)'
        right.style.color = '#E0E0E0'
      } else if (topResult === 'left') {
        left.style.background = '#A5D6A7'
        left.style.color = '#263238'
        neutral.style.background = 'rgba(255, 255, 255, 0.08)'
        neutral.style.color = '#E0E0E0'
        right.style.background = 'rgba(255, 255, 255, 0.08)'
        right.style.color = '#E0E0E0'
      } else if (topResult === 'right') {
        right.style.background = '#A5D6A7'
        right.style.color = '#263238'
        neutral.style.background = 'rgba(255, 255, 255, 0.08)'
        neutral.style.color = '#E0E0E0'
        left.style.background = 'rgba(255, 255, 255, 0.08)'
        left.style.color = '#E0E0E0'
      }
    }

    // for (let i = 0; i < maxPredictions; i++) {
    //   const classPrediction =
    //     prediction[i].className + ': ' + prediction[i].probability.toFixed()
    //   labelContainer.childNodes[i].innerHTML = classPrediction
    // }

    drawPose(pose)
  }

  function drawPose(pose) {
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0)
      if (pose) {
        const minPartConfidence = 0.5
        window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx)
        window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx)
      }
    }
  }

  useEffect(() => {
    initu()
  }, [initu])

  return (
    <MyDiv>
      <FadeIn>
        <>
          <div className='canvo'>
            <canvas id='canvas'></canvas>
          </div>
          <div id='label-container' className='laberu'></div>
          <div className='tensorflow' id='tensorflow'>
            <div className='info' id='info'>
              <h3>Detected posture</h3>
              <p>
                <span id='neutral'>Idle position</span>
              </p>
              <br />
              <p>
                <span id='left'>Left leg</span>
              </p>
              <br />
              <p>
                <span id='right'>Right leg</span>
              </p>
            </div>
          </div>
        </>
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
  .canvo {
    margin-top: 2vh;
    width: 100vw;
  }
  span {
    padding: 10px;
    border-radius: 5px;
    font-size: 19px;
    border: 1px #e0e0e0 solid;
  }
  h3 {
    padding: 30px;
    color: green;
    font-weight: bold;
  }
`

export default Vision
