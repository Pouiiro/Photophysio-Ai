import React from 'react'
import Webcam from 'react-webcam'

const WebcamCapture = () => {
  const webcamRef = React.useRef(null)
  const [imgSrc, setImgSrc] = React.useState(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  return (
    <div
      style={{
        width: '100%',
        height: '50%',
        // display: 'flex',
        flexDirection: 'row',
        border: '2px solid black',
      }}
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        style={{
          border: '2px solid black',
          display: 'flex',
          width: '100%',
          height: '50%',
        }}
      />
      {imgSrc && <img src={imgSrc} />}
      <p>
        <button style={{ background: 'red' }} onClick={capture}>
          Capture photo
        </button>
      </p>
    </div>
  )
}

export default WebcamCapture
