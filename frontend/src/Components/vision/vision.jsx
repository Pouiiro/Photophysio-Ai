import React, { useState } from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'
import MyBtn from 'Components/common/buttons/normButton'

const URL = 'https://teachablemachine.withgoogle.com/models/Xg5gSBJaf/'
let model, webcam, ctx, labelContainer, maxPredictions

const Vision = () => {
  const [start, useStart] = useState(false)
  const [show, setShow] = useState(false)

  const initu = async () => {
    useStart(!start)
    if (start) {
      setShow(false)
    } else {
      setShow(true)
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
  }

  async function loop(timestamp) {
    webcam.update()
    await predict()
    window.requestAnimationFrame(loop)
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas)
    const prediction = await model.predict(posenetOutput)

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ': ' + prediction[i].probability.toFixed(2)
      labelContainer.childNodes[i].innerHTML = classPrediction
    }

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

  return (
    <MyDiv>
      <FadeIn>
        <h1>Physiotherapist Mode</h1>
        <MyBtn type='button' onClick={initu}>
          {start ? 'Pause' : 'start'}
        </MyBtn>
        {show ? (
          <>
            <div className='canvo'>
              <canvas id='canvas'></canvas>
            </div>
            <div id='label-container' className='laberu'></div>
          </>
        ) : (
          ''
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
  .canvo {
    margin-top: 2vh;
    width: 100vw;
  }
`

export default Vision
