/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export default ({ children }) => {
  const [Loading, setLoading] = useState(true)
  const [wstatus, setWstatus] = useState('home')
  const [exercise, SetExercise] = useState(1)
  const [canvawii, setCanvawii] = useState(false)
  const status = {
    home: 'A step towards a better future',
    physio: 'Physiotherapist mode loading',
    patient: 'Patient mode loading',
  }

  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 3000))
    setLoading(false)
  }

  const SetCanvas = () => {
    return (
      <>
        <div className='canvo'>
          <canvas id='canvas'></canvas>
        </div>
        <div id='label-container' className='laberu'></div>
      </>
    )
  }

  const providerValue = {
    Loading,
    setLoading,
    wstatus,
    setWstatus,
    loadData,
    status,
    exercise,
    SetExercise,
    SetCanvas,
    canvawii,
    setCanvawii,
  }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
