/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const MyContext = ({ children }) => {
  const [test, setTest] = useState(true) //this isnt useful now its just as a place holder for a context or state}

  return (
    <AppContext.Provider value={[test, setTest]}>
      {children}
    </AppContext.Provider>
  )
}
export default MyContext
