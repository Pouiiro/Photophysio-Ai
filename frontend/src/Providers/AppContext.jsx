/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export default ({ children }) => {
  const [Loading, setLoading] = useState(true)
  const [wstatus, setWstatus] = useState('home')

  const status = {
    home: 'A step towards a better future',
    physio: 'Physiotherapist mode loading',
    patient: 'Patient mode loading',
  }

  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 3000))
    setLoading(false)
  }

  const providerValue = {
    Loading,
    setLoading,
    wstatus,
    setWstatus,
    loadData,
    status,
  }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
